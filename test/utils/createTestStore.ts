import { configureStore, UnknownAction } from '@reduxjs/toolkit';

import cartReducer from '@/redux/slices/cartSlice';
import phonesReducer from '@/redux/slices/phoneSlice';
import { CartState } from '@/types/cart/cart-state.type';
import { PhoneState } from '@/types/phone/phone-state.type';

const initialPhonesState: PhoneState = {
    phones: [],
    loading: false,
    error: null,
};

const initialCartState: CartState = {
    items: [],
};

/**
 * Creates a Redux store configured for unit testing.
 *
 * @param preloadedState - Initial partial state for testing
 * @returns Store ready for testing Redux logic
 */
export const createTestStore = (
    preloadedState: Partial<{
        phones: PhoneState;
        cart: CartState;
    }> = {},
) => {
    return configureStore({
        reducer: {
            phones: (state: PhoneState | undefined, action: UnknownAction) =>
                phonesReducer(state ?? initialPhonesState, action),
            cart: (state: CartState | undefined, action: UnknownAction) =>
                cartReducer(state ?? initialCartState, action),
        },
        preloadedState,
    });
};
