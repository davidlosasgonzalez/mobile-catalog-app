import { useEffect, useMemo } from 'react';

import { useAppDispatch } from '@/redux/hooks';
import { fetchPhones, loadCachedPhones } from '@/redux/slices/phoneSlice';
import { CachedPhones } from '@/types/phone/cached-phones.type';
import { isCacheValid } from '@/utils/isCacheValid';

/**
 * Hook que carga teléfonos desde caché si está disponible y lanza una petición de fondo.
 *
 * @param params Parámetros opcionales de búsqueda (search, limit, offset)
 */
export function useCachedPhones(
    params: { search?: string; limit?: number; offset?: number } = {},
) {
    const dispatch = useAppDispatch();

    const memoizedParams = useMemo(
        () => ({
            search: params.search ?? '',
            limit: params.limit ?? 20,
            offset: params.offset ?? 0,
        }),
        [params.search, params.limit, params.offset],
    );

    useEffect(() => {
        const cacheKey = 'cachedPhones';
        const cached = localStorage.getItem(cacheKey);

        if (cached) {
            const parsed = JSON.parse(cached) as CachedPhones & {
                lastSearch?: string;
            };

            const isSameSearch = parsed.lastSearch === memoizedParams.search;
            const isValid =
                isCacheValid(parsed.timestamp) && parsed.phones.length > 0;

            if (isValid && isSameSearch) {
                dispatch(loadCachedPhones(parsed.phones));
            }
        }

        void dispatch(fetchPhones(memoizedParams));
    }, [dispatch, memoizedParams]);
}
