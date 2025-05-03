import '@/styles/globals.scss';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import Header from '@/components/shared/Header/Header';
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

            <Component {...pageProps} />
        </Provider>
    );
}
