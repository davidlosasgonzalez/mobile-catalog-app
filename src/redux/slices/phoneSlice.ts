import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
    createAction,
} from '@reduxjs/toolkit';

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
 * Acción local para cargar teléfonos desde el caché sin mostrar loading.
 */
export const loadCachedPhones = createAction<Phone[]>('phones/loadCache');

/**
 * Acción asíncrona para obtener teléfonos desde la API.
 */
export const fetchPhones = createAsyncThunk<
    Phone[],
    FetchPhonesParams | undefined
>('phones/fetch', async (params = {}) => {
    const { search = '', limit = 20, offset = 0 } = params;

    const rawPhones = await getPhones(search, limit, offset);

    const phones = Array.from(
        new Map(rawPhones.map((phone) => [phone.id, phone])).values(),
    );

    if (phones.length > 0) {
        localStorage.setItem(
            'cachedPhones',
            JSON.stringify({
                phones,
                timestamp: new Date().toISOString(),
                lastSearch: search,
            }),
        );
    }

    return phones;
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
            })
            .addCase(
                loadCachedPhones,
                (state, action: PayloadAction<Phone[]>) => {
                    state.phones = action.payload;
                    state.loading = false;
                    state.error = null;
                },
            );
    },
});

export default phoneSlice.reducer;
