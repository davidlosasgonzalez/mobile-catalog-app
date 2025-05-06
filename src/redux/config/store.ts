import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from '../slices/cartSlice';
import phoneReducer, { PhoneState } from '../slices/phoneSlice';

// Define y tipa el persistConfig para evitar el error
const persistConfig: PersistConfig<PhoneState> = {
    key: 'phones',
    storage,
};

const persistedPhoneReducer = persistReducer<PhoneState>(
    persistConfig,
    phoneReducer,
);

/**
 * Main configuration of the Redux Store.
 */
export const store = configureStore({
    reducer: {
        phones: persistedPhoneReducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

/**
 * Type of the global status of the application.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Type for the dispatch of the application.
 */
export type AppDispatch = typeof store.dispatch;

/**
 * Persistor enabling redux-persist synchronisation.
 */
export const persistor = persistStore(store);
