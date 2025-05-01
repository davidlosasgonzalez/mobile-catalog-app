import { vi, describe, it, expect } from 'vitest';
import { mockPhone } from '../../../test/__mocks__/phone.mock';
import { createTestStore } from '../../../test/utils/createTestStore';
import { fetchPhones } from '@/redux/slices/phoneSlice';
import { getPhones } from '@/services/phoneService';

vi.mock('@/services/phoneService', () => ({
    getPhones: vi.fn(),
}));

describe('phoneSlice', () => {
    it('cambia el estado correctamente al hacer fetchPhones()', async () => {
        (getPhones as any).mockResolvedValue([mockPhone]);

        const store = createTestStore();
        const before = store.getState().phones;

        expect(before.loading).toBe(false);
        expect(before.phones).toHaveLength(0);

        const action = store.dispatch(fetchPhones());
        const during = store.getState().phones;

        expect(during.loading).toBe(true);

        await action;

        const after = store.getState().phones;

        expect(after.loading).toBe(false);
        expect(after.phones).toHaveLength(1);
        expect(after.phones[0].name).toBe(mockPhone.name);
    });
});
