// src/App.test.jsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './components/Header';
import React from 'react';

describe('Header', () => {
  it("renders blog name from prop", () => {
    render(<Header name="Milton's Test Blog" />);
    const headerElement = screen.getByText(/Milton's Test Blog/i);
    expect(headerElement).toBeInTheDocument();
  });
});
