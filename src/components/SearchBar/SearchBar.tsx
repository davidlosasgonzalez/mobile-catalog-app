import debounce from 'lodash.debounce';
import Image from 'next/image';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { toast } from 'react-hot-toast';

import styles from './SearchBar.module.scss';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchPhones } from '@/redux/slices/phoneSlice';

/**
 * Barra de búsqueda que permite filtrar teléfonos por nombre o marca.
 */
export default function SearchBar() {
    const dispatch = useAppDispatch();
    const [query, setQuery] = useState('');

    const totalResults = useAppSelector((state) => state.phones.phones.length);

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
        (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            setQuery(value);
            debouncedFetch(value);
        },
        [debouncedFetch],
    );

    const clearQuery = useCallback(() => {
        localStorage.removeItem('cachedPhones');
        setQuery('');
        debouncedFetch('');
    }, [debouncedFetch]);

    return (
        <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className={styles['search-bar']}
        >
            <div className={styles['search-bar__input-group']}>
                <input
                    type="text"
                    placeholder="Search for a smartphone..."
                    value={query}
                    onChange={handleChange}
                    className={styles['search-bar__input']}
                />
                {query && (
                    <button
                        type="button"
                        onClick={clearQuery}
                        className={styles['search-bar__clear-button']}
                        aria-label="Clear search"
                    >
                        <Image
                            src="/close-icon.svg"
                            alt="Clear"
                            width={16}
                            height={16}
                        />
                    </button>
                )}
            </div>

            <p className={styles['search-bar__result-count']}>
                {totalResults} result{totalResults !== 1 && 's'}
            </p>
        </form>
    );
}
