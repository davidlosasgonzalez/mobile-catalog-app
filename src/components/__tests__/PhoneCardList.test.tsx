import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { mockPhone } from '../../../test/__mocks__/phone.mock';
import PhoneCardList from '../shared/PhoneCard/PhoneCardList/PhoneCardList';

describe('PhoneCardList', () => {
    it('muestra un mensaje si no hay teléfonos', () => {
        render(<PhoneCardList phones={[]} />);
        expect(screen.getByText(/no phones available/i)).toBeInTheDocument();
    });

    it('renderiza una lista de tarjetas de teléfono', () => {
        render(
            <PhoneCardList phones={[mockPhone, { ...mockPhone, id: '2' }]} />,
        );
        const images = screen.getAllByRole('img');

        expect(images).toHaveLength(2);
    });
});
