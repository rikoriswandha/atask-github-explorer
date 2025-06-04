import { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { createRouter } from '@tanstack/react-router';
import { routeTree } from '@/routeTree.gen';
import '@mantine/core/styles.css';

export const testRouter = createRouter({
  // Very important to prevent test slowdown
  defaultPendingMinMs: 0,
  routeTree,
});

const AllProviders = ({ children }: { children: ReactNode }) => {
  return <MantineProvider>{children}</MantineProvider>;
};

const allProvidersRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export { allProvidersRender as render };
