import styles from './PhoneStorageSelector.module.scss';

import { IPhoneStorageSelectorProps } from '@/interfaces/phone/phone-storage-selector-props.interface';

/**
 * Visual selector of storage options for a phone.
 *
 * @param options - List of available storage options (e.g. "128 GB", "256 GB")
 * @param selected - Capacity currently selected
 * @param onSelect - Function to be executed when selecting a new capacity
 */
export default function PhoneStorageSelector({
    options,
    selected,
    onSelect,
}: IPhoneStorageSelectorProps) {
    return (
        <section
            className={styles['storage-selector']}
            aria-labelledby="storage-heading"
        >
            <h3
                id="storage-heading"
                className={styles['storage-selector__title']}
            >
                Storage: How much space do you need?
            </h3>

            <div className={styles['storage-selector__options']}>
                {options.map((opt) => (
                    <button
                        key={opt.capacity}
                        type="button"
                        onClick={() => onSelect(opt.capacity)}
                        className={`${styles['storage-selector__option']} ${
                            selected === opt.capacity
                                ? styles['storage-selector__option--selected']
                                : ''
                        }`}
                        aria-pressed={selected === opt.capacity}
                    >
                        {opt.capacity}
                    </button>
                ))}
            </div>
        </section>
    );
}
