import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Footer />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should display the correct text', () => {
        const { getByText } = render(<Footer />);
        const text = getByText(/Copyright 2020 Argent Bank/i);
        expect(text).toBeTruthy();
    });
});