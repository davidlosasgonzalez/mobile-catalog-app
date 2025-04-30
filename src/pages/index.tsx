import Head from 'next/head';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import PhoneCardList from '@/componentes/PhoneCardList';
import type { RootState, AppDispatch } from '@/redux/config/store';
import { fetchPhones } from '@/redux/slices/phoneSlice';

/**
 * Página principal del catálogo de teléfonos.
 */
export default function HomePage() {
    const dispatch: AppDispatch = useDispatch();
    const { phones, loading, error } = useSelector(
        (state: RootState) => state.phones,
    );

    useEffect(() => {
        const fetch = async () => {
            try {
                await dispatch(fetchPhones()).unwrap();
            } catch (err) {
                if (err instanceof Error) {
                    console.error('Error fetching phones:', err.message);
                } else {
                    console.error('Error desconocido al cargar teléfonos');
                }

                if (!error) toast.error('No se pudieron cargar los teléfonos');
            }
        };

        void fetch();
    }, [dispatch, error]);

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

                {loading ? (
                    <p>Cargando...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <PhoneCardList phones={phones} />
                )}
            </section>
        </main>
    );
}
