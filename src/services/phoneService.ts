import { apiClient } from './apiClient';

import { PhoneDetail } from '@/types/phone/phone-detail.type';
import { Phone } from '@/types/phone/phone.type';

/**
 * Make a request to the API to get the list of phones,
 * optionally filtering by name or brand, with paging support.
 *
 * @param search - Search term (phone name or brand name)
 * @param limit - Maximum number of phones to return
 * @param offset - Number of phones to omit (for paging)
 * @returns Promise that resolves to an array of phone numbers
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
 * Gets the details of a specific phone from its ID.
 *
 * @param id - Unique phone identifier
 * @returns Promise that resolves to the phone's details.
 */
export async function getPhoneById(id: string): Promise<PhoneDetail> {
    const res = await apiClient.get<PhoneDetail>(`/products/${id}`);

    return res.data;
}
