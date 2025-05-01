import React from 'react';
import PhoneCardItem from './PhoneCardItem';
import { Phone } from '@/types/phone.types';

type PhoneCardListProps = {
    phones: Phone[];
};

/**
 * Renderiza una lista de tarjetas de teléfonos.
 */
export default function PhoneCardList({ phones }: PhoneCardListProps) {
    if (!phones.length) {
        return <p>No hay teléfonos disponibles.</p>;
    } else {
        console.log(phones);
    }

    return (
        <ul>
            {phones.map((phone) => (
                <li key={phone.id}>
                    <PhoneCardItem {...phone} />
                </li>
            ))}
        </ul>
    );
}
