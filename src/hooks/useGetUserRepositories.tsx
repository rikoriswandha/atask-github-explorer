import { octokit } from '@/lib/octokit-client';
import { queryOptions } from '@tanstack/react-query';

type UserRepositoriesQueryOptions = {
  username: string;
  isEnabled: boolean;
};

export const userRepositoriesQueryOptions = (
  options: UserRepositoriesQueryOptions
) =>
  queryOptions({
    enabled: options.isEnabled,
    queryKey: ['user-repositories', options],
    queryFn: async () => {
      if (!options.username) {
        return null;
      }

      try {
        const response = await octokit.rest.repos.listForUser({
          username: options.username,
        });

        console.log('response', response);

        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });
