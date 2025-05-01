import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { vi, describe, it, expect } from 'vitest';
import { mockPhoneDetail } from '../../../test/__mocks__/phone-detail.mock';
import { createTestStore } from '../../../test/utils/createTestStore';
import PhoneDetailPage from '@/pages/phones/[id]';
import { getPhoneById } from '@/services/phoneService';

vi.mock('next/router', () => ({
    useRouter: () => ({ query: { id: '123' }, push: vi.fn() }),
}));

vi.mock('@/services/phoneService', () => ({
    getPhoneById: vi.fn(),
}));

describe('PhoneDetailPage', () => {
    it('renderiza datos del teléfono y opciones correctamente', async () => {
        (getPhoneById as any).mockResolvedValue(mockPhoneDetail);

        const store = createTestStore();

        render(
            <Provider store={store}>
                <PhoneDetailPage />
            </Provider>,
        );

        await waitFor(() => {
            expect(
                screen.getByRole('img', {
                    name: /samsung galaxy s23 model image/i,
                }),
            ).toBeInTheDocument();

            expect(
                screen.getByRole('heading', {
                    name: /samsung galaxy s23/i,
                }),
            ).toBeInTheDocument();

            expect(
                screen.getByText(
                    (text) => text.includes('Price') && text.includes('799'),
                ),
            ).toBeInTheDocument();
        });
    });
});
