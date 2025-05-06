import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * Next.js custom document.
 *
 * Used to extend the base HTML document and add global attributes.
 *
 * This customisation improves SEO, accessibility, and overall performance.
 */
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
