import Head from 'next/head';
import { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import PhoneCardList from '@/componentes/PhoneCardList';
import SearchBar from '@/componentes/SearchBar';
import type { RootState, AppDispatch } from '@/redux/config/store';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchPhones } from '@/redux/slices/phoneSlice';

/**
 * Página principal que muestra el catálogo de teléfonos móviles.
 * Carga los primeros resultados al montar el componente.
 */
export default function HomePage() {
    const dispatch: AppDispatch = useAppDispatch();
    const { phones, loading, error } = useAppSelector(
        (state: RootState) => state.phones,
    );

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
