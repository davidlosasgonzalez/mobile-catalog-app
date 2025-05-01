import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { vi, describe, it, expect } from 'vitest';
import { mockPhoneDetail } from '../../../test/__mocks__/phone-detail.mock';
import PhoneDetailPage from '@/pages/phones/[id]';
import { getPhoneById } from '@/services/phoneService';

vi.mock('next/router', () => ({
    useRouter: () => ({
        query: { id: '123' },
    }),
}));

vi.mock('@/services/phoneService', () => ({
    getPhoneById: vi.fn(),
}));

describe('PhoneDetailPage', () => {
    /**
     * Renderiza correctamente la información del teléfono cuando se carga desde la API.
     */
    it('renderiza datos del teléfono correctamente', async () => {
        (getPhoneById as any).mockResolvedValue(mockPhoneDetail);

        render(<PhoneDetailPage />);

        await waitFor(() => {
            expect(
                screen.getByRole('img', {
                    name: /imagen del modelo samsung galaxy s23/i,
                }),
            ).toBeInTheDocument();

            expect(
                screen.getByRole('heading', {
                    name: /samsung galaxy s23/i,
                }),
            ).toBeInTheDocument();

            expect(
                screen.getByText(
                    (text) => text.includes('Precio') && text.includes('799'),
                ),
            ).toBeInTheDocument();
        });
    });
});
