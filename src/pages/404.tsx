import Head from 'next/head';

/**
 * Página de error 404.
 */
export default function NotFoundPage() {
    return (
        <main>
            <Head>
                <title>Page not found</title>
                <meta name="robots" content="noindex" />
                <meta
                    name="description"
                    content="La página que buscas no existe."
                />
            </Head>
            <h2>Page not found: Error 404</h2>
        </main>
    );
}
