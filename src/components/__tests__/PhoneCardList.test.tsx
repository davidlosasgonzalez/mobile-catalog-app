import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { mockPhone } from '../../../test/__mocks__/phone.mock';
import PhoneCardList from '../shared/PhoneCard/PhoneCardList/PhoneCardList';

describe('PhoneCardList', () => {
    it('displays a message if no phones are available', () => {
        render(<PhoneCardList phones={[]} />);
        expect(screen.getByText(/no phones available/i)).toBeInTheDocument();
    });

    it('renders a list of phone cards', () => {
        render(
            <PhoneCardList phones={[mockPhone, { ...mockPhone, id: '2' }]} />,
        );

        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(2);
    });
});
