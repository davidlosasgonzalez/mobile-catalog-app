import Head from 'next/head';
import Link from 'next/link';

import styles from './NotFoundPage.module.scss';

/**
 * 404 Not Found page.
 */
export default function NotFoundPage() {
    return (
        <main className={styles.notFound} role="main">
            <Head>
                <title>404 - Page Not Found</title>
                <meta name="robots" content="noindex" />
                <meta
                    name="description"
                    content="The page you are looking for could not be found."
                />
            </Head>

            <div className={styles.content}>
                <h1 className={styles.title} aria-label="404 error">
                    404
                </h1>
                <p className={styles.message}>
                    Sorry, the page you’re looking for doesn’t exist or has been
                    moved.
                </p>
                <Link
                    href="/"
                    className={styles.homeLink}
                    aria-label="Go back to homepage"
                >
                    Go back to homepage
                </Link>
            </div>
        </main>
    );
}
