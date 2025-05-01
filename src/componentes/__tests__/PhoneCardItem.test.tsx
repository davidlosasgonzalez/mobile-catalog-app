import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it, expect } from 'vitest';
import { mockPhone } from '../../../test/__mocks__/phone.mock';
import PhoneCardItem from '../PhoneCard/PhoneCardItem';
import type { Phone } from '@/types/phone/phone.type';
import '@testing-library/jest-dom';

describe('PhoneCardItem', () => {
    it('renderiza nombre, marca, precio e imagen del teléfono', () => {
        render(<PhoneCardItem {...mockPhone} />);

        expect(
            screen.getByRole('img', {
                name: /samsung galaxy s23 model image/i,
            }),
        ).toBeInTheDocument();

        expect(screen.getByText(/samsung galaxy s23/i)).toBeInTheDocument();

        expect(screen.getByText(/price: 799/i)).toBeInTheDocument();
    });

    it('usa imagen por defecto si imageUrl está vacía', () => {
        const phoneWithNoImage: Phone = {
            ...mockPhone,
            imageUrl: '',
        };

        render(<PhoneCardItem {...phoneWithNoImage} />);

        const img = screen.getByRole('img') as HTMLImageElement;

        expect(img.src).toContain('/default-phone-card.jpg');
    });
});
