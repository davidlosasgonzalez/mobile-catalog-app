import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { createTestStore } from '../../../test/utils/createTestStore';
import SearchBar from '../SearchBar/SearchBar';

import { fetchPhones } from '@/redux/slices/phoneSlice';

// Mock lodash debounce to call the function immediately
vi.mock('lodash.debounce', () => ({
    default: (fn: any) => fn,
}));

// Mock phoneSlice with spy on fetchPhones
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

        // Reset mocks before each test
        vi.clearAllMocks();
    });

    it('renders the search input', () => {
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

    it('dispatches fetchPhones when typing in the search bar', async () => {
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
