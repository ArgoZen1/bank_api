import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Home />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render feature items', () => {
        const { getByAltText } = render(<Home />);
        const chatIcon = getByAltText('Chat Icon');
        const moneyIcon = getByAltText('Money Icon');
        const securityIcon = getByAltText('Security Icon');
        expect(chatIcon).toBeTruthy();
        expect(moneyIcon).toBeTruthy();
        expect(securityIcon).toBeTruthy();
    });
});