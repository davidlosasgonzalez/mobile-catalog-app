import { useEffect, useMemo } from 'react';

import { useAppDispatch } from '@/redux/hooks';
import { fetchPhones, loadCachedPhones } from '@/redux/slices/phoneSlice';
import { loadPhonesFromCache } from '@/utils/loadPhonesFromCache';

/**
 * Hook que carga teléfonos desde la caché si es válida y coincide la búsqueda,
 * y lanza una petición a la API para obtener los datos actualizados.
 *
 * - Si el caché es válido y corresponde a la búsqueda actual, se carga primero.
 * - En paralelo se lanza `fetchPhones` para asegurar que los datos están actualizados.
 *
 * @param params Parámetros opcionales de búsqueda: `search`, `limit` y `offset`.
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
        const loadPhones = async () => {
            const cached = loadPhonesFromCache();

            if (
                cached &&
                cached.lastSearch === memoizedParams.search &&
                cached.phones.length > 0
            ) {
                dispatch(loadCachedPhones(cached.phones));
            }

            try {
                await dispatch(fetchPhones(memoizedParams));
            } catch (error) {
                console.error('Error fetching phones from API:', error);
            }
        };

        void loadPhones();
    }, [dispatch, memoizedParams]);
}
