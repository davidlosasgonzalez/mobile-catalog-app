import '@/styles/globals.scss';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/redux/config/store';
import { ClipLoader } from 'react-spinners';

import Header from '@/components/shared/Header/Header';

/**
 * Componente principal que envuelve toda la aplicación.
 */
export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate
                loading={
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100vh',
                        }}
                    >
                        <ClipLoader size={50} color="#333333" />
                    </div>
                }
                persistor={persistor}
            >
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                </Head>

                <Header />
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    );
}
