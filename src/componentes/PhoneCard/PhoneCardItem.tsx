import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Phone } from '@/types/phone/phone.type';

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
                    alt={`${brand} ${name} model image`}
                    width={200}
                    height={300}
                    loading="lazy"
                />
                <h3>
                    {brand} {name}
                </h3>
                <p>Price: {basePrice} €</p>
            </article>
        </Link>
    );
}
