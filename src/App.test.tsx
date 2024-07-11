import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders Amharic Password Generator title', () => {
    render(<App />);
    const titleElement = screen.getByText(/የአማርኛ የይለፍ ቃል አመንጪ/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders Generate button and handles click', () => {
    render(<App />);
    const generateButton = screen.getByText(/አመንጭ\/Generate/i);
    expect(generateButton).toBeInTheDocument();

    fireEvent.click(generateButton);

    // Ensure password field gets updated after clicking generate
    const passwordInput:any = screen.getByRole('textbox', { name: '' });
    waitFor(() => {
      expect(passwordInput.value).toBeTruthy();
    });
  });

  test('renders Copy button and copies password to clipboard', async () => {
    render(<App />);
    const copyButton = screen.getByRole('button', { name: /copy to clipboard/i });
    expect(copyButton).toBeInTheDocument();

    fireEvent.click(copyButton);

    // Assert that popover with "Copied Successfully" appears
    await waitFor(() => {
      const copiedText = screen.getByText(/copied successfully/i);
      expect(copiedText).toBeInTheDocument();
    });

    // Ensure password is copied to clipboard
    const copiedPassword = await navigator.clipboard.readText();
    expect(copiedPassword).toBeTruthy();
  });

});
