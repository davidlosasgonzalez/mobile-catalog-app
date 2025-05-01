import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Phone } from '@/types/phone.types';

const DEFAULT_IMAGE = '/default-phone-card.jpg';

/**
 * Renderiza una tarjeta individual de teléfono.
 */
export default function PhoneCardItem({
    id,
    brand,
    name,
    basePrice,
    imageUrl,
}: Phone) {
    return (
        <Link href={`/phones/${id}`}>
            <article>
                <Image
                    src={imageUrl ? imageUrl : DEFAULT_IMAGE}
                    alt={`Imagen del modelo ${brand} ${name}`}
                    width={200}
                    height={300}
                    loading="lazy"
                />
                <h3>
                    {brand} {name}
                </h3>
                <p>Precio base: {basePrice} €</p>
            </article>
        </Link>
    );
}
