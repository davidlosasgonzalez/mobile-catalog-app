import Image from 'next/image';
import React from 'react';
import { ICartItemProps } from '@/interfaces/card/cart-item-props.interface';

/**
 * Renderiza una tarjeta de producto en el carrito con controles de cantidad,
 * información del producto y botones de acción (eliminar y pagar).
 */
export default function CartItem({
    item,
    onRemove,
    onIncrease,
    onDecrease,
}: ICartItemProps) {
    return (
        <article>
            <Image
                src={item.imageUrl || '/default-phone-card.jpg'}
                alt={`${item.brand} ${item.name} model image`}
                width={80}
                height={100}
                loading="lazy"
            />

            <div>
                <h3>
                    {item.brand} {item.name}
                </h3>
                <p>Color: {item.color}</p>
                <p>Storage: {item.storage}</p>
                <p>Price: {item.price} €</p>

                <div>
                    <button onClick={onDecrease} disabled={item.quantity <= 1}>
                        -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={onIncrease}>+</button>
                </div>

                <p>Total: {item.price * item.quantity} €</p>

                <button onClick={onRemove} aria-label="Remove">
                    Remove
                </button>
            </div>
        </article>
    );
}
