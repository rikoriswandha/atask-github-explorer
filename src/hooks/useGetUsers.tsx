import { octokit } from '@/lib/octokit-client';
import { queryOptions } from '@tanstack/react-query';

type UsersQueryOptions = {
  username?: string;
};

export const usersQueryOptions = (options: UsersQueryOptions) =>
  queryOptions({
    queryKey: ['users', options],
    queryFn: async () => {
      if (!options.username) {
        return null;
      }

      try {
        const response = await octokit.rest.search.users({
          per_page: 5,
          q: `${options.username} in:login`,
        });

        return response.data.items;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });
