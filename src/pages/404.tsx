import Head from 'next/head';

/**
 * Página de error 404.
 */
export default function NotFoundPage() {
    return (
        <main>
            <Head>
                <title>Página no encontrada</title>
                <meta name="robots" content="noindex" />
                <meta
                    name="description"
                    content="La página que buscas no existe."
                />
            </Head>
            <h2>Página no encontrada: Error 404</h2>
        </main>
    );
}
