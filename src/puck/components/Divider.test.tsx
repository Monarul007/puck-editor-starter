import { render } from '@testing-library/react';
import { Divider } from './Divider';
import { describe, it, expect } from 'vitest';

describe('Divider', () => {
  it('renders correctly', () => {
    const { container } = render(<Divider style="solid" color="red" thickness={2} width="50%" />);
    const hr = container.querySelector('hr');
    expect(hr).toBeInTheDocument();
    expect(hr).toHaveStyle({
      width: '50%'
    });
  });
});
