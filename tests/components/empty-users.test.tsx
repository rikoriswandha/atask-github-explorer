import { describe, it, expect } from 'vitest';
import { render, screen } from '@/lib/test-utils';
import EmptyUsers from '@/components/empty-users';

describe('EmptyUsers component', () => {
  render(<EmptyUsers />);

  it('should render the "No users found" text', () => {
    const text = screen.getByText('No users found');
    expect(text).toBeInTheDocument();
  });

  it('should render the empty users image with correct alt text and source', () => {
    const image = screen.getByAltText('empty users');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/src/assets/images/empty-users.svg');
  });
});
