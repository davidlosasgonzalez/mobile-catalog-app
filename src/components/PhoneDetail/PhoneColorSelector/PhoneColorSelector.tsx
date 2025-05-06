import styles from './PhoneColorSelector.module.scss';

import { IPhoneColorSelectorProps } from '@/interfaces/phone/phone-color-selector-props.interface';

/**
 * Visual selector of available colours for a telephone.
 *
 * @param options - List of available colours, each with name and hexadecimal code
 * @param selectedColor - Name of the currently selected colour
 * @param onSelect - Function executed when selecting a new colour
 */
export default function PhoneColorSelector({
    options,
    selectedColor,
    onSelect,
}: IPhoneColorSelectorProps) {
    return (
        <section
            className={styles['color-selector']}
            aria-labelledby="color-heading"
        >
            <h3 id="color-heading" className={styles['color-selector__title']}>
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
                        aria-pressed={selectedColor === color.name}
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
