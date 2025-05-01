import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getPhones } from '@/services/phoneService';
import { FetchPhonesParams } from '@/types/phone/fetch-phones-params.type';
import { PhoneState } from '@/types/phone/phone-state.type';
import { Phone } from '@/types/phone/phone.type';

const initialState: PhoneState = {
    phones: [],
    loading: false,
    error: null,
};

/**
 * Acción asíncrona para obtener teléfonos desde la API con filtros opcionales.
 *
 * @param params - Parámetros de búsqueda: término, límite y desplazamiento.
 * @returns Lista de teléfonos que coinciden con los filtros.
 */
export const fetchPhones = createAsyncThunk<
    Phone[],
    FetchPhonesParams | undefined
>('phones/fetch', async (params = {}) => {
    const { search = '', limit = 20, offset = 0 } = params;

    return await getPhones(search, limit, offset);
});

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

            .addCase(
                fetchPhones.fulfilled,
                (state, action: PayloadAction<Phone[]>) => {
                    state.phones = action.payload;
                    state.loading = false;
                },
            )

            .addCase(fetchPhones.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.error.message ?? 'Error al cargar productos';
            });
    },
});

export default phoneSlice.reducer;
