import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import sharp from 'sharp';

/**
 * API Route that acts as an image proxy:
 * - Downloads the image from a remote URL.
 * - Trim white margins automatically using `sharp.trim()`.
 * - Returns the optimised image in WebP format.
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
    } catch (err) {
        console.error('[image-proxy] Error:', err);
        res.status(500).json({ error: 'Failed to process image' });
    }
}
