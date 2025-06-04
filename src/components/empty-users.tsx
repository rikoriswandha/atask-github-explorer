import { Image, Stack, Text } from '@mantine/core';
import emptyUsers from '@/assets/images/empty-users.svg';

export default function EmptyUsers() {
  return (
    <Stack align="center" justify="center" mt="md">
      <Image src={emptyUsers} alt="empty users" h={200} fit="contain" />
      <Text size="lg" fw="bold" mb="md">
        No users found
      </Text>
    </Stack>
  );
}
