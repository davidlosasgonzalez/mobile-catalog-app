import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '@/componentes/CartItem';
import { RootState, AppDispatch } from '@/redux/config/store';
import {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
} from '@/redux/slices/cartSlice';

/**
 * Página del carrito de compras. Muestra los productos seleccionados, su cantidad y el total.
 */
export default function CartPage() {
    const router = useRouter();
    const dispatch: AppDispatch = useDispatch();
    const items = useSelector((state: RootState) => state.cart.items);

    const handleRemove = (id: string, color: string, storage: string) => {
        dispatch(removeFromCart({ id, color, storage }));
    };

    const handleIncrease = (id: string, color: string, storage: string) => {
        dispatch(increaseQuantity({ id, color, storage }));
    };

    const handleDecrease = (id: string, color: string, storage: string) => {
        dispatch(decreaseQuantity({ id, color, storage }));
    };

    const total = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
    );

    return (
        <main>
            <Head>
                <title>Shopping Cart</title>
                <meta
                    name="description"
                    content="Check the selected phones in your shopping cart."
                />
            </Head>

            <h1>Shopping Cart</h1>

            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <section>
                    {items.map((item) => (
                        <CartItem
                            key={`${item.id}-${item.color}-${item.storage}`}
                            item={item}
                            onRemove={() =>
                                handleRemove(item.id, item.color, item.storage)
                            }
                            onIncrease={() =>
                                handleIncrease(
                                    item.id,
                                    item.color,
                                    item.storage,
                                )
                            }
                            onDecrease={() =>
                                handleDecrease(
                                    item.id,
                                    item.color,
                                    item.storage,
                                )
                            }
                        />
                    ))}

                    <p>Total: {total.toFixed(2)} €</p>
                </section>
            )}

            <button onClick={() => router.push('/')}>Continue shopping</button>
            <button>Pay</button>
        </main>
    );
}
