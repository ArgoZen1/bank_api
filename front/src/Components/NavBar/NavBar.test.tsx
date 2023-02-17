import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'

test('renders the component', () => {
    render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>
    );
    const logo = screen.getByAltText('Logo');
    const link = screen.getByText(/Sign In/i);
    const icon = screen.getByTestId('icon_user');

    expect(logo).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
});

test('check the logo link', () => {
    render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>
    );
    const logo = screen.getByAltText('Logo');
    expect(logo.closest('a')).toHaveAttribute('href', '/');
});

test('check the sign in link', () => {
    render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>
    );
    const link = screen.getByText(/Sign In/i);
    expect(link.closest('a')).toHaveAttribute('href', '/login');
});