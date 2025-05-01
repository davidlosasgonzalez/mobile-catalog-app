import React from 'react';
import { IPhoneColorSelectorProps } from '@/interfaces/phone/phone-color-selector-props.interface';
/**
 * Renderiza los botones de selección de color del teléfono.
 */
export default function PhoneColorSelector({
    options,
    onSelect,
}: IPhoneColorSelectorProps) {
    return (
        <section>
            <h3>Color:</h3>
            <div>
                {options.map((color) => (
                    <button
                        key={color.name}
                        onClick={() => onSelect(color.name)}
                        aria-label={color.name}
                        title={color.name}
                    >
                        {color.name}
                    </button>
                ))}
            </div>
        </section>
    );
}
