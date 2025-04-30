import Image from 'next/image';
import React from 'react';
import { Phone } from '@/types/phone.types';

const DEFAULT_IMAGE = '/default-phone-card.jpg';

/**
 * Renderiza una tarjeta individual de teléfono.
 */
export default function PhoneCardItem({
    brand,
    name,
    basePrice,
    imageUrl,
}: Phone) {
    const safeImage = imageUrl?.trim() ? imageUrl : DEFAULT_IMAGE;

    return (
        <div>
            <Image
                src={safeImage}
                alt={`Imagen del modelo ${brand} ${name}`}
                width={200}
                height={300}
                priority
                style={{ objectFit: 'contain' }}
            />
            <h3>
                {brand} {name}
            </h3>
            <p>Precio base: {basePrice} €</p>
        </div>
    );
}
