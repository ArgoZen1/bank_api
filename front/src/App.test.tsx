import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});