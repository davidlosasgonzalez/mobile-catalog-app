import Head from 'next/head';
import Link from 'next/link';
import styles from './NotFoundPage.module.scss';

/**
 * Página de error 404.
 */
export default function NotFoundPage() {
    return (
        <main className={styles.notFound}>
            <Head>
                <title>Page not found</title>
                <meta name="robots" content="noindex" />
                <meta
                    name="description"
                    content="La página que buscas no existe."
                />
            </Head>

            <div className={styles.content}>
                <h1 className={styles.title}>404</h1>
                <p className={styles.message}>
                    Oops, the page you're looking for doesn't exist.
                </p>
                <Link href="/" className={styles.homeLink}>
                    Go back to homepage
                </Link>
            </div>
        </main>
    );
}
