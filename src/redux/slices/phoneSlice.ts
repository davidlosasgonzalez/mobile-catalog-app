import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '@/services/apiClient';
import { Phone } from '@/types/phone.types';

/**
 * Estado global para la gestión del catálogo de teléfonos.
 */
type PhoneState = {
    phones: Phone[];
    loading: boolean;
    error: string | null;
};

/**
 * Estado inicial del slice de teléfonos.
 */
const initialState: PhoneState = {
    phones: [],
    loading: false,
    error: null,
};

/**
 * Acción asíncrona para obtener los teléfonos desde la API.
 */
export const fetchPhones = createAsyncThunk('phones/fetch', async () => {
    const res = await apiClient.get<Phone[]>('/products');

    return res.data;
});

/**
 * Slice de Redux para manejar el estado del catálogo de teléfonos.
 */
const phoneSlice = createSlice({
    name: 'phones',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPhones.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPhones.fulfilled, (state, action) => {
                state.phones = action.payload;
                state.loading = false;
            })
            .addCase(fetchPhones.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.error.message || 'Error al cargar productos';
            });
    },
});

export default phoneSlice.reducer;
