import { Phone } from '@/types/phone/phone.type';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PhoneCardItem.module.scss';

const DEFAULT_IMAGE = '/default-phone-card.jpg';

/**
 * Muestra una tarjeta con la información básica de un teléfono.
 *
 * @param id - ID único del teléfono
 * @param brand - Marca del teléfono
 * @param name - Nombre o modelo del teléfono
 * @param basePrice - Precio base del dispositivo
 * @param imageUrl - URL de la imagen del teléfono (se usa una por defecto si está vacía)
 */
export default function PhoneCardItem({
    id,
    brand,
    name,
    basePrice,
    imageUrl,
}: Phone) {
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
                        loading="lazy"
                    />
                </div>
                <div className={styles['phone-card__content']}>
                    <p className={styles['phone-card__brand']}>{brand}</p>
                    <div className={styles['phone-card__details']}>
                        <p>{name}</p>
                        <p>{basePrice} EUR</p>
                    </div>
                </div>
            </article>
        </Link>
    );
}
