import React from 'react';
import { IPhoneStorageSelectorProps } from '@/interfaces/phone/phone-storage-selector-props.interface';

/**
 * Selector desplegable para elegir la capacidad de almacenamiento.
 */
export default function PhoneStorageSelector({
    options,
    selected,
    onSelect,
}: IPhoneStorageSelectorProps) {
    return (
        <section>
            <h3>Almacenamiento:</h3>
            <select
                value={selected ?? ''}
                onChange={(e) => onSelect(e.target.value)}
            >
                {options.map((opt) => (
                    <option key={opt.capacity} value={opt.capacity}>
                        {opt.capacity}
                    </option>
                ))}
            </select>
        </section>
    );
}
