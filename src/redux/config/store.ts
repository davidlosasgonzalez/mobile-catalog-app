import { configureStore } from '@reduxjs/toolkit';
import phoneReducer from '../slices/phoneSlice';

/**
 * Configuración principal del Redux Store.
 */
export const store = configureStore({
    reducer: {
        phones: phoneReducer,
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
