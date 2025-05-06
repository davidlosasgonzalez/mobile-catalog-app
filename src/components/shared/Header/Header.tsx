import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './Header.module.scss';

import { RootState } from '@/redux/config/store';

/**
 * Main application header.
 */
export default function Header() {
    const totalItems = useSelector((state: RootState) =>
        state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
    );

    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.logoWrapper}>
                <Link href="/" aria-label="Go to homepage">
                    <Image
                        src="/logo-app.png"
                        alt="Mobile Catalog Logo"
                        fill
                        sizes="80px"
                        className={styles.logo}
                        priority
                    />
                </Link>
            </div>

            <Link
                href="/cart"
                className={styles.cartButton}
                aria-label="Go to cart"
            >
                <Image
                    src="/shopping-bag.svg"
                    alt="Shopping cart"
                    width={18}
                    height={18}
                    className={styles.cartIcon}
                />
                {hasMounted && totalItems > 0 && (
                    <span className={styles.badge} aria-live="polite">
                        {totalItems}
                    </span>
                )}
            </Link>
        </header>
    );
}
