import { UnknownAction } from '@reduxjs/toolkit';
import { describe, expect, it } from 'vitest';

import { mockCartItem } from '../../../test/__mocks__/cart-item.mock';
import cartReducer, {
    addToCart,
    clearCart,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
} from '../slices/cartSlice';

import { CartState } from '@/types/cart/cart-state.type';

const initialState: CartState = {
    items: [],
};

describe('cartSlice', () => {
    it('should handle initial state', () => {
        expect(
            cartReducer(undefined, {
                type: 'UNKNOWN_ACTION',
            } as UnknownAction),
        ).toEqual({
            items: [],
        });
    });

    it('should add item to cart', () => {
        const newState = cartReducer(initialState, addToCart(mockCartItem));

        expect(newState.items).toHaveLength(1);
        expect(newState.items[0]).toEqual(mockCartItem);
    });

    it('should increase quantity if item already exists', () => {
        const stateWithItem: CartState = {
            items: [{ ...mockCartItem, quantity: 1 }],
        };
        const newState = cartReducer(stateWithItem, addToCart(mockCartItem));

        expect(newState.items).toHaveLength(1);
        expect(newState.items[0].quantity).toBe(2);
    });

    it('should remove item from cart', () => {
        const stateWithItem: CartState = {
            items: [mockCartItem],
        };
        const newState = cartReducer(
            stateWithItem,
            removeFromCart({
                id: mockCartItem.id,
                color: mockCartItem.color,
                storage: mockCartItem.storage,
            }),
        );

        expect(newState.items).toHaveLength(0);
    });

    it('should clear the cart', () => {
        const stateWithItems: CartState = {
            items: [
                mockCartItem,
                {
                    ...mockCartItem,
                    storage: '512 GB',
                },
            ],
        };
        const newState = cartReducer(stateWithItems, clearCart());

        expect(newState.items).toHaveLength(0);
    });

    it('should increase quantity of an existing item', () => {
        const state: CartState = {
            items: [{ ...mockCartItem, quantity: 2 }],
        };

        const newState = cartReducer(
            state,
            increaseQuantity({
                id: mockCartItem.id,
                color: mockCartItem.color,
                storage: mockCartItem.storage,
            }),
        );

        expect(newState.items[0].quantity).toBe(3);
    });

    it('should decrease quantity if greater than 1', () => {
        const state: CartState = {
            items: [{ ...mockCartItem, quantity: 2 }],
        };

        const newState = cartReducer(
            state,
            decreaseQuantity({
                id: mockCartItem.id,
                color: mockCartItem.color,
                storage: mockCartItem.storage,
            }),
        );

        expect(newState.items[0].quantity).toBe(1);
    });

    it('should remove item if quantity becomes 0', () => {
        const state: CartState = {
            items: [{ ...mockCartItem, quantity: 1 }],
        };

        const newState = cartReducer(
            state,
            decreaseQuantity({
                id: mockCartItem.id,
                color: mockCartItem.color,
                storage: mockCartItem.storage,
            }),
        );

        expect(newState.items).toHaveLength(0);
    });
});
