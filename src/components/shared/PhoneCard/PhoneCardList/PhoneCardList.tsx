import PhoneCardItem from '../PhoneCardItem/PhoneCardItem';

import styles from './PhoneCardList.module.scss';

import { IPhoneCardListProps } from '@/interfaces/phone/phone-card-list-props.interface';

/**
 * Lista de tarjetas de teléfonos renderizadas en una cuadrícula.
 *
 * @param phones - Array de teléfonos a mostrar en la lista
 */
export default function PhoneCardList({ phones }: IPhoneCardListProps) {
    if (!phones.length) {
        return (
            <p className={styles['phone-list__empty']}>No phones available.</p>
        );
    }

    return (
        <ul className={styles['phone-list']}>
            {phones.map((phone) => (
                <li key={phone.id} className={styles['phone-list__item']}>
                    <PhoneCardItem {...phone} />
                </li>
            ))}
        </ul>
    );
}
