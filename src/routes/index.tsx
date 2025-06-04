import EmptyUsers from '@/components/empty-users';
import NoSearch from '@/components/no-search';
import RepositoriesList from '@/components/repositories-list';
import UsersSkeleton from '@/components/users-skeleton';
import { usersQueryOptions } from '@/hooks/useGetUsers';
import {
  Accordion,
  ActionIcon,
  Avatar,
  Button,
  Grid,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { SearchIcon, XIcon } from 'lucide-react';
import { Fragment, useState } from 'react';

import { z } from 'zod';

const usersSearchSchema = z.object({
  username: z.string().optional(),
  selectedUsername: z.string().optional(),
});

export const Route = createFileRoute('/')({
  component: RouteComponent,
  validateSearch: usersSearchSchema,
});

function RouteComponent() {
  const search = Route.useSearch();
  const [username, setUsername] = useState<string | undefined>(search.username);
  const navigate = Route.useNavigate();
  const { data: users, isLoading } = useQuery(
    usersQueryOptions({ username: search.username })
  );

  return (
    <Stack py="md">
      <Grid gutter="xs">
        <Grid.Col
          span={{
            xs: 12,
            sm: 10,
          }}
        >
          <TextInput
            placeholder="Enter username"
            value={username || ''}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            leftSection={<SearchIcon size={16} />}
            rightSection={
              username?.length && username.length > 0 ? (
                <ActionIcon
                  variant="subtle"
                  onClick={() => {
                    setUsername(undefined);
                    navigate({ search: { username: undefined } });
                  }}
                >
                  <XIcon size={16} />
                </ActionIcon>
              ) : null
            }
          />
        </Grid.Col>
        <Grid.Col
          span={{
            xs: 12,
            sm: 2,
          }}
        >
          <Button
            fullWidth
            onClick={() => {
              navigate({ search: { username } });
            }}
            disabled={!username || username.length < 3}
          >
            Search
          </Button>
        </Grid.Col>
      </Grid>
      {users === null ? (
        <NoSearch />
      ) : isLoading ? (
        <UsersSkeleton />
      ) : users?.length === 0 ? (
        <EmptyUsers />
      ) : (
        <Fragment>
          <Text>Showing users for "{search.username}"</Text>
          <Accordion
            variant="separated"
            onChange={(value) => {
              navigate({
                search: { username, selectedUsername: value || undefined },
              });
            }}
          >
            {users?.map((user) => (
              <Accordion.Item key={user.login} value={user.login}>
                <Accordion.Control
                  icon={<Avatar src={user.avatar_url} size="sm" />}
                >
                  {user.login}
                </Accordion.Control>
                <Accordion.Panel>
                  <RepositoriesList username={user.login} />
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Fragment>
      )}
    </Stack>
  );
}
