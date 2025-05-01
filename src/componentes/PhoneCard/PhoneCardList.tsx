import React from 'react';
import PhoneCardItem from './PhoneCardItem';
import { IPhoneCardListProps } from '@/interfaces/phone/phone-card-list-props.interface';

/**
 * Renderiza una lista de tarjetas de teléfonos.
 */
export default function PhoneCardList({ phones }: IPhoneCardListProps) {
    if (!phones.length) {
        return <p>No phones available.</p>;
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
