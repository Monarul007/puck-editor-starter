import { render, screen } from '@testing-library/react';
import { Heading } from './Heading';
import { describe, it, expect } from 'vitest';

describe('Heading', () => {
  it('renders the heading text', () => {
    render(<Heading text="Test Heading" level="h1" />);
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
  });

  it('renders with the correct tag', () => {
    const { container } = render(<Heading text="Test Heading" level="h1" />);
    expect(container.querySelector('h1')).toBeInTheDocument();
  });
});
