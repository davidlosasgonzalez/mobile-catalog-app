import { configureStore } from '@reduxjs/toolkit';
import phonesReducer from '@/redux/slices/phoneSlice';
import type { PhoneState } from '@/types/phone.types';

/**
 * Crea una instancia de Redux Store para pruebas unitarias.
 *
 * @param preloadedState - Estado inicial opcional para inyectar en la store.
 * @returns Una store de prueba configurada con el reducer de teléfonos.
 */
export const createTestStore = (preloadedState?: { phones: PhoneState }) => {
    return configureStore({
        reducer: {
            phones: phonesReducer,
        },
        preloadedState,
    });
};
