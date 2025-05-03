import { isCacheValid } from './isCacheValid';

import { CachedPhones } from '@/types/phone/cached-phones.type';

/**
 * Intenta cargar los teléfonos desde el caché local y validar su vigencia.
 *
 * @returns Un array de teléfonos si el caché es válido, `null` en caso contrario.
 */
export function loadPhonesFromCache(): CachedPhones | null {
    const cacheKey = 'cachedPhones';
    const cached = localStorage.getItem(cacheKey);

    if (!cached) return null;

    try {
        const parsed = JSON.parse(cached) as CachedPhones;

        const isValid =
            parsed.phones.length > 0 && isCacheValid(parsed.timestamp);

        return isValid ? parsed : null;
    } catch {
        return null;
    }
}
