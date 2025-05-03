import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import sharp from 'sharp';

/**
 * API Route que actúa como proxy de imágenes:
 * - Descarga la imagen desde una URL remota.
 * - Recorta márgenes blancos automáticamente usando `sharp.trim()`.
 * - Devuelve la imagen optimizada en formato WebP.
 */
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const imageUrl = req.query.url;

    if (typeof imageUrl !== 'string') {
        return res.status(400).json({ error: 'Missing or invalid image URL' });
    }

    try {
        const response = await axios.get<ArrayBuffer>(imageUrl, {
            responseType: 'arraybuffer',
        });

        const buffer = Buffer.from(response.data);

        const trimmedBuffer = await sharp(buffer).trim().webp().toBuffer();

        res.setHeader('Content-Type', 'image/webp');
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        res.send(trimmedBuffer);
    } catch (error) {
        console.error('[image-proxy] Error:', error);
        res.status(500).json({ error: 'Failed to process image' });
    }
}
