import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Mock, describe, it, beforeEach, expect, vi } from 'vitest';

import { mockPhoneDetail } from '../../../test/__mocks__/phone-detail.mock';

import PhoneDetailPage from '@/pages/phones/[id]';
import { store } from '@/redux/config/store';
import * as phoneService from '@/services/phoneService';

const routerPush = vi.fn();

vi.mock('next/router', () => ({
    useRouter: () => ({
        query: { id: '123' },
        push: routerPush,
    }),
}));

vi.mock('@/services/phoneService', async () => {
    const actual = await vi.importActual<typeof phoneService>(
        '@/services/phoneService',
    );

    return {
        ...actual,
        getPhoneById: vi.fn(),
    };
});

describe('PhoneDetailPage', () => {
    beforeEach(() => {
        (phoneService.getPhoneById as Mock).mockResolvedValue(mockPhoneDetail);
        routerPush.mockReset();
    });

    it('displays a loading message while fetching phone data', async () => {
        render(
            <Provider store={store}>
                <PhoneDetailPage />
            </Provider>,
        );

        expect(screen.getByText(/loading phone details/i)).toBeInTheDocument();

        await screen.findByRole('heading', {
            level: 1,
            name: /galaxy s23/i,
        });
    });

    it('renders phone details after loading', async () => {
        render(
            <Provider store={store}>
                <PhoneDetailPage />
            </Provider>,
        );

        await screen.findByRole('heading', {
            level: 1,
            name: /galaxy s23/i,
        });

        expect(screen.getByText('799 eur')).toBeInTheDocument();
        expect(
            screen.getByText('Storage: How much space do you need?'),
        ).toBeInTheDocument();
        expect(
            screen.getByText('Color: Pick your favorite'),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /add to cart/i }),
        ).toBeEnabled();
    });

    it('allows selecting storage and color, and adds the phone to cart', async () => {
        render(
            <Provider store={store}>
                <PhoneDetailPage />
            </Provider>,
        );

        await screen.findByRole('heading', {
            level: 1,
            name: /galaxy s23/i,
        });

        const storageButton = screen.getByRole('button', { name: /128GB/i });
        fireEvent.click(storageButton);
        expect(storageButton.className).toMatch(/--selected/);

        const colorButton = screen.getByRole('button', { name: /negro/i });
        fireEvent.click(colorButton);
        expect(screen.getByText('Negro')).toBeInTheDocument();

        const addToCartButton = screen.getByRole('button', {
            name: /add to cart/i,
        });
        fireEvent.click(addToCartButton);

        await waitFor(() => {
            expect(routerPush).toHaveBeenCalledWith('/cart');
        });
    });
});
