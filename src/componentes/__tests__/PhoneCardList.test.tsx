import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it, expect } from 'vitest';
import { mockPhone } from '../../../test/__mocks__/phone.mock';
import PhoneCardList from '../PhoneCardList';

describe('PhoneCardList', () => {
    /**
     * Muestra un mensaje si la lista de teléfonos está vacía.
     */
    it('muestra un mensaje si no hay teléfonos', () => {
        render(<PhoneCardList phones={[]} />);
        expect(
            screen.getByText(/no hay teléfonos disponibles/i),
        ).toBeInTheDocument();
    });

    /**
     * Renderiza una tarjeta por cada teléfono proporcionado.
     */
    it('renderiza una lista de tarjetas de teléfono', () => {
        render(<PhoneCardList phones={[mockPhone, mockPhone]} />);
        const images = screen.getAllByRole('img');

        expect(images).toHaveLength(2);
    });
});
