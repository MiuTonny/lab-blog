import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './components/Header';

test('renders blog name from prop', () => {
  render(<Header name="Milton's Test Blog" />);
  const headerElement = screen.getByText(/Milton's Test Blog/i);
  expect(headerElement).toBeInTheDocument();
});
