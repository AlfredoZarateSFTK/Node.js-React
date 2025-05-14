import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator Component', () => {
  test('renders calculator display with initial value of 0', () => {
    render(<Calculator />);
    const displayElement = screen.getByText('0');
    expect(displayElement).toBeInTheDocument();
  });

  test('can input digits', () => {
    render(<Calculator />);
    
    // Click on digit 5
    fireEvent.click(screen.getByText('5'));
    expect(screen.getByText('5')).toBeInTheDocument();
    
    // Click on digit 3
    fireEvent.click(screen.getByText('3'));
    expect(screen.getByText('53')).toBeInTheDocument();
  });

  test('can perform addition', () => {
    render(<Calculator />);
    
    // Input 5 + 3 = 8
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    
    expect(screen.getByText('8')).toBeInTheDocument();
  });

  test('can clear the display', () => {
    render(<Calculator />);
    
    // Input 5
    fireEvent.click(screen.getByText('5'));
    expect(screen.getByText('5')).toBeInTheDocument();
    
    // Clear display
    fireEvent.click(screen.getByText('C'));
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('can toggle sign', () => {
    render(<Calculator />);
    
    // Input 5
    fireEvent.click(screen.getByText('5'));
    
    // Toggle sign
    fireEvent.click(screen.getByText('±'));
    expect(screen.getByText('-5')).toBeInTheDocument();
    
    // Toggle sign again
    fireEvent.click(screen.getByText('±'));
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});