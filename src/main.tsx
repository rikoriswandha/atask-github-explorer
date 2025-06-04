import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from '@/routeTree.gen';
import { nprogress } from '@mantine/nprogress';
import { queryClient } from './lib/query-client';
import { QueryClientProvider } from '@tanstack/react-query';

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
});

router.subscribe(
  'onBeforeLoad',
  ({ pathChanged }) => pathChanged && nprogress.start()
);

router.subscribe('onLoad', () => nprogress.complete());

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
