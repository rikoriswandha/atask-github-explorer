import { ActionIcon, Container, Flex, Group, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Link } from '@tanstack/react-router';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

export default function Footer() {
  const isMobile = useMediaQuery(`(max-width: 48em`);

  return (
    <Container size="md">
      <Flex
        p="md"
        justify="space-between"
        align="center"
        direction={isMobile ? 'column' : 'row'}
        gap="md"
      >
        <Text size="sm" ta={isMobile ? 'center' : 'left'}>
          © {new Date().getFullYear()} Riko Riswandha Fahmi Prasetyo. Made with
          ❤️ for ATask
        </Text>
        <Group gap="sm">
          <ActionIcon
            variant="default"
            radius="lg"
            component={Link}
            to="https://www.facebook.com/rikorisw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon style={{ width: '70%', height: '70%' }} />
          </ActionIcon>
          <ActionIcon
            variant="default"
            radius="lg"
            component={Link}
            to="https://www.instagram.com/rikoriswandha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon style={{ width: '70%', height: '70%' }} />
          </ActionIcon>
          <ActionIcon
            component={Link}
            to="https://www.linkedin.com/in/rikoriswandha"
            target="_blank"
            rel="noopener noreferrer"
            variant="default"
            radius="lg"
          >
            <LinkedinIcon style={{ width: '70%', height: '70%' }} />
          </ActionIcon>
        </Group>
      </Flex>
    </Container>
  );
}
