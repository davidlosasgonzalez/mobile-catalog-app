import { NextConfig } from 'next';

const url = new URL(process.env.NEXT_PUBLIC_API_URL || '');
const hostname = url.hostname;
const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname,
            },
        ],
    },
};

export default nextConfig;
