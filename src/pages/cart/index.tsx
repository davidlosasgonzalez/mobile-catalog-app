import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './CartPage.module.scss';

import CartItem from '@/components/CartItem/CartItem';
import BackHomeButton from '@/components/shared/BackButton/BackButton';
import { AppDispatch, RootState } from '@/redux/config/store';
import {
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
} from '@/redux/slices/cartSlice';

/**
 * Página del carrito de compras.
 */
export default function CartPage() {
    const [hasMounted, setHasMounted] = useState(false);
    const router = useRouter();
    const dispatch: AppDispatch = useDispatch();
    const items = useSelector((state: RootState) => state.cart.items);

    useEffect(() => {
        setHasMounted(true);
    }, []);

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

    if (!hasMounted) {
        return null;
    }

    return (
        <main className={styles.cart}>
            <Head>
                <title>Shopping Cart</title>
                <meta
                    name="description"
                    content="Check the selected phones in your shopping cart."
                />
            </Head>

            <BackHomeButton />

            <h2 className={styles.cart__title}>Cart ({items.length})</h2>

            {items.length === 0 ? (
                <p className={styles.cart__empty}>Your cart is empty.</p>
            ) : (
                <>
                    <section className={styles.cart__items}>
                        {items.map((item) => (
                            <CartItem
                                key={`${item.id}-${item.color}-${item.storage}`}
                                item={item}
                                onRemove={() =>
                                    handleRemove(
                                        item.id,
                                        item.color,
                                        item.storage,
                                    )
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
                    </section>

                    <div className={styles.cart__summary}>
                        <div data-area="total" className={styles.cart__total}>
                            <span>Total</span>
                            <span>{total.toFixed(2)} €</span>
                        </div>

                        <button
                            data-area="continue"
                            onClick={() => router.push('/')}
                            className={`${styles.cart__button} ${styles['cart__button--outline']}`}
                        >
                            Continue shopping
                        </button>

                        <button
                            data-area="pay"
                            className={`${styles.cart__button} ${styles['cart__button--filled']}`}
                        >
                            Pay
                        </button>
                    </div>
                </>
            )}
        </main>
    );
}
