import { describe, expect, it, vi } from 'vitest';

import { mockPhone } from '../../../test/__mocks__/phone.mock';
import { createTestStore } from '../../../test/utils/createTestStore';

import { fetchPhones } from '@/redux/slices/phoneSlice';
import { getPhones } from '@/services/phoneService';

vi.mock('@/services/phoneService', () => ({
    getPhones: vi.fn(),
}));

describe('phoneSlice', () => {
    it('updates the state correctly when fetchPhones() is dispatched', async () => {
        (getPhones as any).mockResolvedValue([mockPhone]);

        const store = createTestStore();
        const before = store.getState().phones;

        expect(before.loading).toBe(false);
        expect(before.phones).toHaveLength(0);

        const actionPromise = store.dispatch(fetchPhones());

        await Promise.resolve();

        const during = store.getState().phones;
        expect(during.loading).toBe(true);

        await actionPromise;

        const after = store.getState().phones;
        expect(after.loading).toBe(false);
        expect(after.phones).toHaveLength(1);
        expect(after.phones[0].name).toBe(mockPhone.name);
    });
});
