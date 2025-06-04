import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { AppShell, Container, Group, Title } from '@mantine/core';
import Footer from '../components/footer';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const isMobile = useMediaQuery(`(max-width: 48em`);
  const [mobileOpened] = useDisclosure();

  return (
    <React.Fragment>
      <AppShell
        header={{
          height: 60,
        }}
        footer={{
          height: isMobile ? 120 : 60,
        }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !mobileOpened, desktop: true },
        }}
      >
        <AppShell.Header>
          <Container
            size="md"
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Group justify="space-between" align="center" style={{ flex: 1 }}>
              <Title order={3} c="blue">
                Github Explorer
              </Title>
            </Group>
          </Container>
        </AppShell.Header>
        <AppShell.Main>
          <Container size="md">
            <Outlet />
          </Container>
        </AppShell.Main>
        <AppShell.Footer>
          <Footer />
        </AppShell.Footer>
      </AppShell>
    </React.Fragment>
  );
}
