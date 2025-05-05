import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchPhones } from '@/redux/slices/phoneSlice';

import Head from 'next/head';
import { ClipLoader } from 'react-spinners';

import styles from './index.module.scss';

import SearchBar from '@/components/SearchBar/SearchBar';
import PhoneCardList from '@/components/shared/PhoneCard/PhoneCardList/PhoneCardList';

/**
 * Página principal que muestra el catálogo de teléfonos móviles.
 */
export default function HomePage() {
    const dispatch = useAppDispatch();
    const { phones, loading, error } = useAppSelector((state) => state.phones);

    useEffect(() => {
        dispatch(fetchPhones({ search: '', limit: 20, offset: 0 }));
    }, [dispatch]);

    return (
        <main className={styles.homePage}>
            <Head>
                <title>Telephone Catalogue</title>
                <meta
                    name="description"
                    content="View and manage mobile phones"
                />
            </Head>

            <section className={styles.phoneCatalog}>
                <SearchBar />

                {loading ? (
                    <div className={styles.loader}>
                        <div className={styles['loader__spinner']}>
                            <ClipLoader
                                size={40}
                                color="#333333"
                                speedMultiplier={1}
                            />
                            <span>Loading phones...</span>
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
