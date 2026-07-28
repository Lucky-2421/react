import { render, screen } from '@testing-library/react';
import App from './App';

test('renders employee list heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Employee List/i);
  expect(headingElement).toBeInTheDocument();
});
