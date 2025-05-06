import PhoneCardItem from '../PhoneCardItem/PhoneCardItem';

import styles from './PhoneCardList.module.scss';

import { IPhoneCardListProps } from '@/interfaces/phone/phone-card-list-props.interface';

/**
 * Renders a list of phone cards in a grid layout.
 */
export default function PhoneCardList({ phones }: IPhoneCardListProps) {
    if (!phones.length) {
        return (
            <p
                className={styles['phone-list__empty']}
                role="status"
                aria-live="polite"
            >
                No phones available.
            </p>
        );
    }

    return (
        <ul className={styles['phone-list']}>
            {phones.map((phone, i) => (
                <li key={phone.id} className={styles['phone-list__item']}>
                    <PhoneCardItem {...phone} priority={i === 0} />
                </li>
            ))}
        </ul>
    );
}
