import { Skeleton, Stack } from '@mantine/core';

export default function RepositoriesSkeleton() {
  return (
    <Stack gap="sm">
      {Array.from({ length: 5 }, (_, index) => (
        <Skeleton key={index} height={70} radius="md" variant="rectangular" />
      ))}
    </Stack>
  );
}
