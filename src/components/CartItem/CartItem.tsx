import Image from 'next/image';

import styles from './CartItem.module.scss';

import { ICartItemProps } from '@/interfaces/card/cart-item-props.interface';

/**
 * Componente visual para representar un producto dentro del carrito.
 *
 * @param item - Datos del producto en el carrito (marca, modelo, cantidad, etc.)
 * @param onRemove - Función que se ejecuta al eliminar el producto del carrito
 * @param onIncrease - Función que se ejecuta al aumentar la cantidad del producto
 * @param onDecrease - Función que se ejecuta al disminuir la cantidad del producto
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
                    >
                        -
                    </button>
                    <span className={styles['cart-item__quantity']}>
                        {item.quantity}
                    </span>
                    <button
                        onClick={onIncrease}
                        className={styles['cart-item__button']}
                    >
                        +
                    </button>
                </div>

                <button
                    onClick={onRemove}
                    aria-label="Remove"
                    className={styles['cart-item__remove']}
                >
                    Remove
                </button>
            </div>
        </article>
    );
}
