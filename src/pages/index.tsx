import Head from 'next/head';
import { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import PhoneCardList from '@/componentes/PhoneCard/PhoneCardList';
import SearchBar from '@/componentes/SearchBar';
import type { RootState, AppDispatch } from '@/redux/config/store';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchPhones } from '@/redux/slices/phoneSlice';

/**
 * Página principal que muestra el catálogo de teléfonos móviles.
 */
export default function HomePage() {
    const dispatch: AppDispatch = useAppDispatch();
    const phoneState = useAppSelector((state) => state.phones);
    const { phones, loading, error } = phoneState;

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(
                    fetchPhones({ search: '', limit: 20, offset: 0 }),
                ).unwrap();
            } catch {}
        };

        void fetchData();
    }, [dispatch]);

    return (
        <main>
            <Head>
                <title>Telephone Catalogue</title>
                <meta
                    name="description"
                    content="View and manage mobile phones"
                />
            </Head>

            <section>
                <h2>Telephone Catalogue</h2>
                <SearchBar />
                {loading ? (
                    <ClipLoader size={40} color="#333" speedMultiplier={1} />
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <PhoneCardList phones={phones} />
                )}
            </section>
        </main>
    );
}
