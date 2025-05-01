import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { vi, describe, it, expect } from 'vitest';
import { createTestStore } from '../../../test/utils/createTestStore';
import CartPage from '@/pages/cart';
import { removeFromCart } from '@/redux/slices/cartSlice';
import { CartState } from '@/types/cart/cart-state.type';

vi.mock('next/router', () => ({
    useRouter: () => ({ push: vi.fn() }),
}));

vi.mock('@/redux/slices/cartSlice', async () => {
    const actual = await vi.importActual<any>('@/redux/slices/cartSlice');

    return {
        ...actual,
        removeFromCart: vi.fn((payload) => ({ type: 'cart/remove', payload })),
    };
});

describe('CartPage', () => {
    const defaultState: CartState = {
        items: [
            {
                id: 'abc',
                brand: 'Samsung',
                name: 'Galaxy A15',
                imageUrl: 'https://example.com/a15.jpg',
                color: 'Negro',
                storage: '128 GB',
                price: 199,
                quantity: 1,
            },
        ],
    };

    it('muestra los ítems del carrito y calcula el total', () => {
        const store = createTestStore({ cart: defaultState });

        render(
            <Provider store={store}>
                <CartPage />
            </Provider>,
        );

        expect(screen.getByText(/galaxy a15/i)).toBeInTheDocument();
        expect(screen.getByText(/199\.00 €/i)).toBeInTheDocument();
        expect(screen.getByText(/total: 199\.00 €/i)).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /continue shopping/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /pay/i }),
        ).toBeInTheDocument();
    });

    it('muestra un mensaje si el carrito está vacío', () => {
        const store = createTestStore({ cart: { items: [] } });

        render(
            <Provider store={store}>
                <CartPage />
            </Provider>,
        );

        expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
    });

    it('permite eliminar un producto del carrito', () => {
        const store = createTestStore({ cart: defaultState });
        store.dispatch = vi.fn();

        render(
            <Provider store={store}>
                <CartPage />
            </Provider>,
        );

        fireEvent.click(screen.getByRole('button', { name: /remove/i }));

        expect(store.dispatch).toHaveBeenCalled();
        expect(removeFromCart).toHaveBeenCalledWith({
            id: 'abc',
            color: 'Negro',
            storage: '128 GB',
        });
    });
});
