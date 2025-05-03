import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../slices/cartSlice';
import phoneReducer from '../slices/phoneSlice';

/**
 * Configuración principal del Redux Store.
 */
export const store = configureStore({
    reducer: {
        phones: phoneReducer,
        cart: cartReducer,
    },
});

/**
 * Tipo del RootState.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Tipo del AppDispatch.
 */
export type AppDispatch = typeof store.dispatch;
