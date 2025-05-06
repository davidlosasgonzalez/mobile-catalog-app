import Image from 'next/image';
import Link from 'next/link';

import styles from './PhoneCardItem.module.scss';

import { PhoneCardItemProps } from '@/types/phone/phone-card-item-props.type';

const DEFAULT_IMAGE = '/default-phone-card.jpg';

/**
 * Displays a card with basic phone information.
 */
export default function PhoneCardItem({
    id,
    brand,
    name,
    basePrice,
    imageUrl,
    priority,
}: PhoneCardItemProps) {
    return (
        <Link href={`/phones/${id}`} className={styles['phone-card__link']}>
            <article className={styles['phone-card']}>
                <div className={styles['phone-card__image-wrapper']}>
                    <Image
                        src={`/api/image-proxy?url=${encodeURIComponent(imageUrl || DEFAULT_IMAGE)}`}
                        alt={`${brand} ${name} model image`}
                        width={240}
                        height={240}
                        className={styles['phone-card__image']}
                        {...(priority
                            ? { priority: true }
                            : { loading: 'lazy' })}
                    />
                </div>

                <div className={styles['phone-card__content']}>
                    <p className={styles['phone-card__brand']}>{brand}</p>

                    <div className={styles['phone-card__details']}>
                        <h3 className={styles['phone-card__name']}>{name}</h3>
                        <p>{basePrice} EUR</p>
                    </div>
                </div>
            </article>
        </Link>
    );
}
