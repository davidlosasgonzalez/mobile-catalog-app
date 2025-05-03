import styles from './PhoneStorageSelector.module.scss';

import { IPhoneStorageSelectorProps } from '@/interfaces/phone/phone-storage-selector-props.interface';

/**
 * Selector visual de opciones de almacenamiento para un teléfono.
 *
 * @param options - Lista de opciones de almacenamiento disponibles (por ejemplo, '128 GB', '256 GB')
 * @param selected - Capacidad actualmente seleccionada
 * @param onSelect - Función que se ejecuta al seleccionar una nueva capacidad
 */
export default function PhoneStorageSelector({
    options,
    selected,
    onSelect,
}: IPhoneStorageSelectorProps) {
    return (
        <section className={styles['storage-selector']}>
            <h3 className={styles['storage-selector__title']}>
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
                    >
                        {opt.capacity}
                    </button>
                ))}
            </div>
        </section>
    );
}
