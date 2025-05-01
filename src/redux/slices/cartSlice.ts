import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItemIdentifier } from '@/types/cart/cart-item-identifier.type';
import { CartItem } from '@/types/cart/cart-item.type';
import { CartState } from '@/types/cart/cart-state.type';

const STORAGE_KEY = 'cartState';

/**
 * Recupera el estado del carrito desde localStorage.
 */
const loadCartFromStorage = (): CartState => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);

        return stored ? JSON.parse(stored) : { items: [] };
    } catch {
        return { items: [] };
    }
};

/**
 * Guarda el estado actual del carrito en localStorage.
 */
const saveCartToStorage = (state: CartState) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
        // fail silently
    }
};

const initialState: CartState = loadCartFromStorage();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existing = state.items.find(
                (item) =>
                    item.id === action.payload.id &&
                    item.color === action.payload.color &&
                    item.storage === action.payload.storage,
            );

            if (existing) {
                existing.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }

            saveCartToStorage(state);
        },

        removeFromCart: (state, action: PayloadAction<CartItemIdentifier>) => {
            state.items = state.items.filter(
                (item) =>
                    !(
                        item.id === action.payload.id &&
                        item.color === action.payload.color &&
                        item.storage === action.payload.storage
                    ),
            );

            saveCartToStorage(state);
        },

        clearCart: (state) => {
            state.items = [];
            saveCartToStorage(state);
        },

        increaseQuantity: (
            state,
            action: PayloadAction<CartItemIdentifier>,
        ) => {
            const item = state.items.find(
                (i) =>
                    i.id === action.payload.id &&
                    i.color === action.payload.color &&
                    i.storage === action.payload.storage,
            );

            if (item) {
                item.quantity += 1;
                saveCartToStorage(state);
            }
        },

        decreaseQuantity: (
            state,
            action: PayloadAction<CartItemIdentifier>,
        ) => {
            const index = state.items.findIndex(
                (i) =>
                    i.id === action.payload.id &&
                    i.color === action.payload.color &&
                    i.storage === action.payload.storage,
            );

            if (index !== -1) {
                if (state.items[index].quantity > 1) {
                    state.items[index].quantity -= 1;
                } else {
                    state.items.splice(index, 1);
                }

                saveCartToStorage(state);
            }
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
