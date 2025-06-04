import { describe, it, expect } from 'vitest';
import { render, screen } from '@/lib/test-utils';
import EmptyUsers from '../../src/components/empty-users';

describe('EmptyUsers component', () => {
  it('should render the "No users found" text', () => {
    render(<EmptyUsers />);
    expect(screen.getByText('No users found')).toBeInTheDocument();
  });

  it('should render the empty users image with correct alt text and source', () => {
    render(<EmptyUsers />);
    const image = screen.getByAltText('empty users');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/src/assets/images/empty-users.svg');
  });
});
