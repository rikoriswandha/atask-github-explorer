import { Button, Container, Group, Image, Text, Title } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import errorImage from '@/assets/images/error.svg';

type ErrorComponentProps = {
  error: Error;
};

export const ErrorComponent = ({ error }: ErrorComponentProps) => {
  return (
    <Container h="100vh" display="flex" style={{ alignItems: 'center' }}>
      <Container>
        <Image src={errorImage} alt="error" h={200} fit="contain" mb="xl" />
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
