import { userRepositoriesQueryOptions } from '@/hooks/useGetUserRepositories';
import { Anchor, Card, Group, SimpleGrid, Stack, Text } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { StarIcon } from 'lucide-react';
import RepositoriesSkeleton from './repositories-skeleton';
import { useSearch } from '@tanstack/react-router';

type RepositoriesListProps = {
  username: string;
};

export default function RepositoriesList({ username }: RepositoriesListProps) {
  const { selectedUsername } = useSearch({ from: '/' });
  const { data: repositories, isLoading } = useQuery(
    userRepositoriesQueryOptions({
      username,
      isEnabled: selectedUsername === username,
    })
  );

  if (isLoading) {
    return <RepositoriesSkeleton />;
  }

  if (repositories?.length === 0) {
    return <Text>This user has no repositories</Text>;
  }

  return (
    <SimpleGrid
      cols={{
        xs: 1,
        sm: 2,
      }}
    >
      {repositories?.map((repository) => (
        <Card key={repository.id} withBorder>
          <Stack gap="xs">
            <Group justify="space-between">
              <Anchor
                fw="bold"
                href={repository.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {repository.name}
              </Anchor>
              <Group gap={6}>
                <Text fw="bold" c="yellow">
                  {repository.stargazers_count}
                </Text>
                <StarIcon size={16} />
              </Group>
            </Group>
            <Text size="sm" c="gray.7">
              {repository.description || 'This repository has no description'}
            </Text>
          </Stack>
        </Card>
      ))}
    </SimpleGrid>
  );
}
