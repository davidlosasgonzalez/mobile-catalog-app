import Head from 'next/head';
import { ClipLoader } from 'react-spinners';

import styles from './index.module.scss';

import SearchBar from '@/components/SearchBar/SearchBar';
import PhoneCardList from '@/components/shared/PhoneCard/PhoneCardList/PhoneCardList';
import { useCachedPhones } from '@/hooks/useCachedPhones';
import { useAppSelector } from '@/redux/hooks';

/**
 * Página principal que muestra el catálogo de teléfonos móviles.
 */
export default function HomePage() {
    useCachedPhones();

    const { phones, loading, error } = useAppSelector((state) => state.phones);

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
                                color="#333"
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
