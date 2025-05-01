import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { createTestStore } from '../../../test/utils/createTestStore';
import SearchBar from '../SearchBar';
import type { AppDispatch } from '@/redux/config/store';
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
    let dispatch: AppDispatch;

    /**
     * Crea un store de prueba antes de cada test y mockea dispatch.
     */
    beforeEach(() => {
        store = createTestStore({
            phones: {
                phones: [],
                loading: false,
                error: null,
            },
        });

        dispatch = vi.fn();
        store.dispatch = dispatch;
    });

    /**
     * Verifica que el input de búsqueda se renderiza correctamente.
     */
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

    /**
     * Verifica que al escribir en el input se dispare la acción fetchPhones.
     */
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
            expect(dispatch).toHaveBeenCalled();
            expect(fetchPhones).toHaveBeenCalledWith({
                search: 'Samsung',
                limit: 20,
                offset: 0,
            });
        });
    });
});
