import { configureStore } from '@reduxjs/toolkit';
import phonesReducer from '@/redux/slices/phoneSlice';
import type { PhoneState } from '@/types/phone.types';

/**
 * Estado inicial explícito del slice, usado para garantizar tipado correcto en tests.
 */
const initialPhonesState: PhoneState = {
    phones: [],
    loading: false,
    error: null,
};

/**
 * Crea una store de Redux configurada para pruebas unitarias.
 *
 * @param preloadedState - Estado parcial inicial para pruebas (solo phones).
 * @returns Store lista para testear lógica redux.
 */
export const createTestStore = (
    preloadedState: Partial<{ phones: PhoneState }> = {},
) => {
    return configureStore({
        reducer: {
            phones: (state: PhoneState | undefined, action): PhoneState =>
                phonesReducer(state ?? initialPhonesState, action),
        },
        preloadedState,
    });
};
