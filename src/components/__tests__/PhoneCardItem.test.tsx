import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

import PhoneCardItem from '@/components/shared/PhoneCard/PhoneCardItem/PhoneCardItem';
import { Phone } from '@/types/phone/phone.type';

const basePhone: Phone = {
    id: '1',
    brand: 'Samsung',
    name: 'Galaxy S23',
    basePrice: 799,
    imageUrl: 'https://example.com/galaxy-s23.jpg',
};

describe('PhoneCardItem', () => {
    it('renders the phone name, brand, price, and image', () => {
        render(<PhoneCardItem {...basePhone} />);

        expect(
            screen.getByRole('img', {
                name: /samsung galaxy s23 model image/i,
            }),
        ).toBeInTheDocument();

        expect(screen.getByText(/Samsung/i)).toBeInTheDocument();
        expect(screen.getByText(/Galaxy S23/i)).toBeInTheDocument();
        expect(screen.getByText(/799 EUR/i)).toBeInTheDocument();
    });

    it('uses the default image if imageUrl is empty', () => {
        render(<PhoneCardItem {...{ ...basePhone, imageUrl: '' }} />);

        const img = screen.getByRole('img') as HTMLImageElement;
        expect(decodeURIComponent(img.src)).toContain(
            '/default-phone-card.jpg',
        );
    });
});
