import { Button, Container, Group, Text, Title } from '@mantine/core';
import { Link } from '@tanstack/react-router';

type ErrorComponentProps = {
  error: Error;
};

export const ErrorComponent = ({ error }: ErrorComponentProps) => {
  return (
    <Container h="100vh" display="flex" style={{ alignItems: 'center' }}>
      <Container>
        <Title ta="center" order={1}>
          Something went wrong
        </Title>
        <Text c="dimmed" size="lg" ta="center" mt="xl">
          {typeof error === 'string' ? error : error.message}
        </Text>
        <Group justify="center" mt="xl">
          <Button component={Link} to="/" size="md">
            Take me back to home page
          </Button>
        </Group>
      </Container>
    </Container>
  );
};
