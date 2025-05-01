import { apiClient } from './apiClient';
import { PhoneDetail } from '@/types/phone/phone-detail.type';
import { Phone } from '@/types/phone/phone.type';

/**
 * Realiza una petición a la API para obtener el listado de teléfonos,
 * opcionalmente filtrando por nombre o marca, con soporte para paginación.
 *
 * @param search - Término de búsqueda (nombre o marca del teléfono)
 * @param limit - Número máximo de teléfonos a devolver
 * @param offset - Número de teléfonos a omitir (para paginación)
 * @returns Promesa que resuelve con un array de teléfonos
 */
export async function getPhones(
    search = '',
    limit = 20,
    offset = 0,
): Promise<Phone[]> {
    const res = await apiClient.get<Phone[]>(`/products`, {
        params: { search, limit, offset },
    });

    return res.data;
}

/**
 * Obtiene los detalles de un teléfono específico a partir de su ID.
 *
 * @param id - Identificador único del teléfono
 * @returns Promesa que resuelve con los datos del teléfono
 */
export async function getPhoneById(id: string): Promise<PhoneDetail> {
    const res = await apiClient.get<PhoneDetail>(`/products/${id}`);

    return res.data;
}
