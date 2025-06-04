import { Skeleton, Stack } from '@mantine/core';

type UsersSkeletonProps = {
  count?: number;
};

export default function UsersSkeleton({ count = 5 }: UsersSkeletonProps) {
  return (
    <Stack gap="sm">
      {Array.from({ length: count }, (_, index) => (
        <Skeleton key={index} height={50} radius="md" variant="rectangular" />
      ))}
    </Stack>
  );
}
