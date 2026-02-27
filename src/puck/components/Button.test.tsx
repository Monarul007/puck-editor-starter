import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { describe, it, expect } from 'vitest';

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button text="Click me" variant="solid" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders as a link when href is provided', () => {
    const { container } = render(<Button text="Link" variant="solid" href="https://example.com" />);
    const link = container.querySelector('a');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
  });
});
