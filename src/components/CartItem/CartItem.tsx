import Image from 'next/image';

import styles from './CartItem.module.scss';

import { ICartItemProps } from '@/interfaces/card/cart-item-props.interface';

/**
 * Visual component representing a product inside the shopping cart.
 *
 * @param item - Cart product details (brand, model, quantity, etc.)
 * @param onRemove - Function triggered when removing the product
 * @param onIncrease - Function triggered when increasing quantity
 * @param onDecrease - Function triggered when decreasing quantity
 */
export default function CartItem({
    item,
    onRemove,
    onIncrease,
    onDecrease,
}: ICartItemProps) {
    return (
        <article className={styles['cart-item']}>
            <div className={styles['cart-item__image-wrapper']}>
                <Image
                    src={`/api/image-proxy?url=${encodeURIComponent(
                        item.imageUrl || '/default-phone-card.jpg',
                    )}`}
                    alt={`${item.brand} ${item.name} model image`}
                    width={80}
                    height={100}
                    className={styles['cart-item__image']}
                    loading="lazy"
                />
            </div>

            <div className={styles['cart-item__info']}>
                <h3 className={styles['cart-item__name']}>{item.name}</h3>
                <p className={styles['cart-item__details']}>
                    {item.storage} | {item.color}
                </p>
                <p className={styles['cart-item__price']}>{item.price} €</p>

                <div className={styles['cart-item__controls']}>
                    <button
                        onClick={onDecrease}
                        disabled={item.quantity <= 1}
                        className={styles['cart-item__button']}
                        aria-label={`Decrease quantity of ${item.name}`}
                    >
                        -
                    </button>
                    <span className={styles['cart-item__quantity']}>
                        {item.quantity}
                    </span>
                    <button
                        onClick={onIncrease}
                        className={styles['cart-item__button']}
                        aria-label={`Increase quantity of ${item.name}`}
                    >
                        +
                    </button>
                </div>

                <button
                    onClick={onRemove}
                    aria-label={`Remove ${item.name} from cart`}
                    className={styles['cart-item__remove']}
                >
                    Remove
                </button>
            </div>
        </article>
    );
}
