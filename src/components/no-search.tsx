import { Image, Stack, Text } from '@mantine/core';
import emptyUsers from '@/assets/images/no-search.svg';

export default function NoSearch() {
  return (
    <Stack align="center" justify="center" mt="md">
      <Image src={emptyUsers} alt="no search" h={200} fit="contain" />
      <Text size="lg" fw="bold" mb="md">
        Type something to search
      </Text>
    </Stack>
  );
}
