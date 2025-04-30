import { configureStore } from '@reduxjs/toolkit';
import phoneReducer from '../slices/phoneSlice';

export const store = configureStore({
    reducer: {
        phones: phoneReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
