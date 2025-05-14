import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calculator title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Calculadora React/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders footer text', () => {
  render(<App />);
  const footerElement = screen.getByText(/Desarrollado con React/i);
  expect(footerElement).toBeInTheDocument();
});

test('renders calculator component', () => {
  render(<App />);
  // Check if the calculator display is rendered
  const displayElement = screen.getByText('0');
  expect(displayElement).toBeInTheDocument();
  
  // Check if some calculator buttons are rendered
  const clearButton = screen.getByText('C');
  const equalsButton = screen.getByText('=');
  
  expect(clearButton).toBeInTheDocument();
  expect(equalsButton).toBeInTheDocument();
});