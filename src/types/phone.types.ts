/**
 * Tipo base de teléfono.
 */
export type Phone = {
    id: string;
    brand: string;
    name: string;
    basePrice: number;
    imageUrl: string;
};

/**
 * Tipo extendido con los detalles completos de un teléfono.
 */
export type PhoneDetail = Phone & {
    description: string;
    rating: number;
    specs: {
        screen: string;
        resolution: string;
        processor: string;
        mainCamera: string;
        selfieCamera: string;
        battery: string;
        os: string;
        screenRefreshRate: string;
    };
    colorOptions: {
        name: string;
        hexCode: string;
        imageUrl: string;
    }[];
    storageOptions: {
        capacity: string;
        price: number;
    }[];
    similarProducts: Phone[];
};

/**
 * Estado de la entidad de teléfonos en Redux.
 */
export type PhoneState = {
    phones: Phone[];
    loading: boolean;
    error: string | null;
};

/**
 * Parámetros para la búsqueda de teléfonos.
 */
export type FetchPhonesParams = {
    search?: string;
    limit?: number;
    offset?: number;
};
