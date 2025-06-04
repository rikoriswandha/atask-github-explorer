import { describe, it, expect } from 'vitest';
import { render, screen } from '@/lib/test-utils';
import NoSearch from '@/components/no-search';

describe('NoSearch component', () => {
  render(<NoSearch />);

  it('should render the "Type something to search" text', () => {
    const text = screen.getByText('Type something to search');
    expect(text).toBeInTheDocument();
  });

  it('should render the no search image with correct alt text and source', () => {
    const image = screen.getByAltText('no search');
    expect(image).toBeInTheDocument();
    // The image src is imported, vite/jest will resolve it to the actual path during test
    // We expect it to be /src/assets/images/no-search.svg based on the import path
    expect(image).toHaveAttribute('src', '/src/assets/images/no-search.svg');
  });
});
