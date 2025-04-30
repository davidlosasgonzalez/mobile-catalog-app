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
 * Estado de la entidad de teléfonos en Redux.
 */
export type PhoneState = {
    phones: Phone[];
    loading: boolean;
    error: string | null;
};
