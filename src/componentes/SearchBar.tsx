import debounce from 'lodash.debounce';
import React from 'react';
import { useCallback, useMemo, useState } from 'react';
import { toast } from 'react-hot-toast';
import type { AppDispatch } from '@/redux/config/store';
import { useAppDispatch } from '@/redux/hooks';
import { fetchPhones } from '@/redux/slices/phoneSlice';

/**
 * Barra de búsqueda: permite buscar teléfonos por nombre o marca.
 */
export default function SearchBar() {
    const dispatch: AppDispatch = useAppDispatch();
    const [query, setQuery] = useState('');

    const debouncedFetch = useMemo(
        () =>
            debounce((term: string) => {
                dispatch(fetchPhones({ search: term, limit: 20, offset: 0 }))
                    ?.unwrap?.()
                    .catch((err) => {
                        const msg =
                            err instanceof Error
                                ? err.message
                                : 'Unknown error';

                        toast.error(msg);
                    });
            }, 500),
        [dispatch],
    );

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;

            setQuery(value);
            debouncedFetch(value);
        },
        [debouncedFetch],
    );

    return (
        <input
            type="text"
            placeholder="Search for a smartphone..."
            value={query}
            onChange={handleChange}
        />
    );
}
