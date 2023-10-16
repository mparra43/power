import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('Renders main page correctly', async () => {
  render(<App />);
  const buttonCount = await screen.findByRole('button');
  expect(buttonCount.innerHTML).toBe('count is 0');
  expect(true).toBeTruthy();
});