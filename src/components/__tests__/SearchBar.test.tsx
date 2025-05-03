import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { createTestStore } from '../../../test/utils/createTestStore';
import SearchBar from '../SearchBar/SearchBar';

import { fetchPhones } from '@/redux/slices/phoneSlice';

vi.mock('lodash.debounce', () => ({
    default: (fn: any) => fn,
}));

vi.mock('@/redux/slices/phoneSlice', async () => {
    const actual = await vi.importActual<any>('@/redux/slices/phoneSlice');

    return {
        ...actual,
        fetchPhones: vi.fn(() => ({ type: 'phones/fetch' })),
    };
});

describe('SearchBar', () => {
    let store: ReturnType<typeof createTestStore>;

    beforeEach(() => {
        store = createTestStore({
            phones: {
                phones: [],
                loading: false,
                error: null,
            },
        });

        // Reinicia mock entre tests
        vi.clearAllMocks();
    });

    it('renderiza el campo de búsqueda', () => {
        render(
            <Provider store={store}>
                <SearchBar />
            </Provider>,
        );

        const input = screen.getByPlaceholderText(
            /Search for a smartphone.../i,
        );
        expect(input).toBeInTheDocument();
    });

    it('dispara la acción fetchPhones al escribir', async () => {
        render(
            <Provider store={store}>
                <SearchBar />
            </Provider>,
        );

        const input = screen.getByPlaceholderText(
            /Search for a smartphone.../i,
        );
        fireEvent.change(input, { target: { value: 'Samsung' } });

        await waitFor(() => {
            expect(fetchPhones).toHaveBeenCalledWith({
                search: 'Samsung',
                limit: 20,
                offset: 0,
            });
        });
    });
});
