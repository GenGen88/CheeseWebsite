import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('initial state is set correctly', () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    expect(getByText('Price in $: 0')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter amount in grams')).toBeInTheDocument();
  });

  test('updates amount state on input change', () => {
    const { getByPlaceholderText } = render(<App />);
    const amountInput = getByPlaceholderText('Enter amount in grams');
    fireEvent.change(amountInput, { target: { value: '100' } });
    expect(amountInput.value).toBe('100');
  });

  test('updates cheese type state on button click', () => {
    const { getByText } = render(<App />);
    const cheddarButton = getByText('Cheddar: $15/kg');
    fireEvent.click(cheddarButton);
    expect(getByText('Price in $: 0')).toBeInTheDocument(); 
  });

  test('calculates price correctly', () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    const amountInput = getByPlaceholderText('Enter amount in grams');
    const cheddarButton = getByText('Cheddar: $15/kg');
    fireEvent.change(amountInput, { target: { value: '200' } });
    fireEvent.click(cheddarButton);
    expect(getByText('Price in $: 3')).toBeInTheDocument(); 
  });
});
