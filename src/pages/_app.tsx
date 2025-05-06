import '@/styles/globals.scss';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { PersistGate } from 'redux-persist/integration/react';

import Header from '@/components/shared/Header/Header';
import { store, persistor } from '@/redux/config/store';

/**
 * Root application component wrapping all pages.
 */
export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate
                loading={
                    <div className="app__loader">
                        <ClipLoader size={50} color="#333333" />
                    </div>
                }
                persistor={persistor}
            >
                <Head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="robots" content="index, follow" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <header>
                    <Header />
                </header>

                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    );
}
