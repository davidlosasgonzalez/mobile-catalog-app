import debounce from 'lodash.debounce';
import React from 'react';
import { useCallback, useMemo, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/redux/config/store';
import { fetchPhones } from '@/redux/slices/phoneSlice';

/**
 * Renderiza la barra de búsqueda.
 */
export default function SearchBar() {
    const dispatch: AppDispatch = useDispatch();
    const [query, setQuery] = useState('');
    const debouncedFetch = useMemo(
        () =>
            debounce((term: string) => {
                dispatch(fetchPhones(term))
                    ?.unwrap?.()
                    .catch((err) => {
                        const msg =
                            err instanceof Error
                                ? err.message
                                : 'Error desconocido';

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
