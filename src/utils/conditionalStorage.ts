import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { WebStorage } from 'redux-persist/lib/types';

/**
 * Crea un almacenamiento vacío para el servidor (noop storage).
 */
const createNoopStorage = (): WebStorage => ({
    getItem: (_key: string) => Promise.resolve(null),
    setItem: (_key: string, _value: string) => Promise.resolve(),
    removeItem: (_key: string) => Promise.resolve(),
});

/**
 * Crea un almacenamiento local en el navegador o un almacenamiento vacío en el servidor (SSR).
 */
export const storage =
    typeof window !== 'undefined'
        ? createWebStorage('local')
        : createNoopStorage();
