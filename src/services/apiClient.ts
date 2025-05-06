import axios from 'axios';

/**
 * Axios client configured to access the product API.
 */
export const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY ?? '',
        Accept: 'application/json',
    },
});
