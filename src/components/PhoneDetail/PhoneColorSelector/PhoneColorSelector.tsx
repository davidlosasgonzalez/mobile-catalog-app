import styles from './PhoneColorSelector.module.scss';

import { IPhoneColorSelectorProps } from '@/interfaces/phone/phone-color-selector-props.interface';

/**
 * Selector visual de colores disponibles para un teléfono.
 *
 * @param options - Lista de colores disponibles, cada uno con nombre y código hexadecimal
 * @param selectedColor - Nombre del color actualmente seleccionado
 * @param onSelect - Función que se ejecuta al seleccionar un nuevo color
 */
export default function PhoneColorSelector({
    options,
    selectedColor,
    onSelect,
}: IPhoneColorSelectorProps) {
    return (
        <section className={styles['color-selector']}>
            <h3 className={styles['color-selector__title']}>
                Color: Pick your favorite
            </h3>

            <div className={styles['color-selector__options']}>
                {options.map((color) => (
                    <button
                        key={color.name}
                        type="button"
                        onClick={() => onSelect(color.name)}
                        aria-label={color.name}
                        title={color.name}
                        className={`${styles['color-selector__option']} ${
                            selectedColor === color.name
                                ? styles['color-selector__option--selected']
                                : ''
                        }`}
                        style={{ backgroundColor: color.hexCode }}
                    />
                ))}
            </div>

            {selectedColor && (
                <p className={styles['color-selector__name']}>
                    {selectedColor}
                </p>
            )}
        </section>
    );
}
