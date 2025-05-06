import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { WebStorage } from 'redux-persist/lib/types';

/**
 * Create an empty storage for the server (noop storage).
 */
const createNoopStorage = (): WebStorage => ({
    getItem: (_key: string) => Promise.resolve(null),
    setItem: (_key: string, _value: string) => Promise.resolve(),
    removeItem: (_key: string) => Promise.resolve(),
});

/**
 * Create a local storage in the browser or an empty storage on the server (SSR).
 */
export const storage =
    typeof window !== 'undefined'
        ? createWebStorage('local')
        : createNoopStorage();
