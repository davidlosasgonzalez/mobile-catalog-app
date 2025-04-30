import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import Header from '@/componentes/Header';
import { store } from '@/redux/config/store';

/**
 * Componente principal que envuelve toda la aplicación.
 */
export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>

            <Header />
            <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
            <Component {...pageProps} />
        </Provider>
    );
}
