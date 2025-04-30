import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import PhoneCardList from '@/componentes/PhoneCardList';
import SearchBar from '@/componentes/SearchBar';
import type { RootState, AppDispatch } from '@/redux/config/store';
import { fetchPhones } from '@/redux/slices/phoneSlice';

/**
 * Página principal.
 */
export default function HomePage() {
    const dispatch: AppDispatch = useDispatch();
    const { phones, loading, error } = useSelector(
        (state: RootState) => state.phones,
    );

    useEffect(() => {
        dispatch(fetchPhones('')).catch(() => {});
    }, [dispatch]);

    return (
        <main>
            <Head>
                <title>Catálogo de Teléfonos</title>
                <meta
                    name="description"
                    content="Visualiza y gestiona teléfonos móviles"
                />
            </Head>

            <section>
                <h2>Catálogo de Teléfonos</h2>
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
