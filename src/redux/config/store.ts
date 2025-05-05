import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import persistConfig from './persistConfig';
import cartReducer from '../slices/cartSlice';
import phoneReducer from '../slices/phoneSlice';

const persistedPhoneReducer = persistReducer(persistConfig, phoneReducer);

/**
 * Configuración principal del Redux Store.
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
 * Tipo del estado global de la aplicación.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Tipo para el dispatch de la aplicación.
 */
export type AppDispatch = typeof store.dispatch;

/**
 * Persistor que permite la sincronización de redux-persist.
 */
export const persistor = persistStore(store);
