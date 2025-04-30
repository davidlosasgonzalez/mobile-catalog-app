import axios from 'axios';

/**
 * Cliente Axios configurado para acceder a la API de productos.
 * Utiliza la clave de API y la URL base definidas en variables de entorno.
 */
export const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY ?? '',
        Accept: 'application/json',
    },
});
