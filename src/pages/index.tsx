import { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

import styles from './index.module.scss';

import SearchBar from '@/components/SearchBar/SearchBar';
import PhoneCardList from '@/components/shared/PhoneCard/PhoneCardList/PhoneCardList';
import SeoHead from '@/components/shared/SeoHead/SeoHead';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchPhones } from '@/redux/slices/phoneSlice';

/**
 * Main page displaying the mobile phone catalog.
 */
export default function HomePage() {
    const dispatch = useAppDispatch();
    const { phones, loading, error } = useAppSelector((state) => state.phones);

    useEffect(() => {
        void dispatch(fetchPhones({ search: '', limit: 20, offset: 0 }));
    }, [dispatch]);

    return (
        <main className={styles.homePage}>
            <SeoHead
                title="Mobile Phone Catalog | HACK A BOSS"
                description="Explore and compare the best smartphones. Find the perfect mobile phone easily."
            />

            <section
                className={styles.phoneCatalog}
                aria-labelledby="catalog-heading"
            >
                <h1 id="catalog-heading" className="sr-only">
                    Mobile Phone Catalog
                </h1>

                <SearchBar />

                {loading ? (
                    <div className={styles.loader}>
                        <div className={styles['loader__spinner']}>
                            <ClipLoader
                                size={40}
                                color="#333333"
                                speedMultiplier={1}
                            />
                            <span role="status" aria-live="polite">
                                Loading phones...
                            </span>
                        </div>
                    </div>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <PhoneCardList phones={phones} />
                )}
            </section>
        </main>
    );
}
