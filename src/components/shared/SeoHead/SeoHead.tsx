/**
 * Componente para definir metadatos SEO y sociales en una página.
 */
import Head from 'next/head';

interface SeoHeadProps {
    title: string;
    description: string;
    url?: string;
    image?: string;
}

export default function SeoHead({
    title,
    description,
    url = 'https://tusitio.com',
    image = '/images/og-preview.jpg',
}: SeoHeadProps) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Head>
    );
}
