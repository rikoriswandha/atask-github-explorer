import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: 'always',
      networkMode: 'always',
    },
    mutations: {
      networkMode: 'always',
    },
  },
});

// const createIDBPersister = (idbValidKey: IDBValidKey = 'QworkEmployer') => {
//   return {
//     persistClient: async (client: PersistedClient) => {
//       await set(idbValidKey, client);
//     },
//     restoreClient: async () => {
//       return await get<PersistedClient>(idbValidKey);
//     },
//     removeClient: async () => {
//       await del(idbValidKey);
//     },
//   } as Persister;
// };

// const persister = createIDBPersister();

export { queryClient };
