import { useStrings } from "@/localizations";
import { Box, Card, Text, type JSX } from "@/theme";
import { CreateUser, UsersCount, UsersTable } from "@/users";

export function UsersScreen(): JSX.Element {
  const strings = useStrings();

  return (
    <Box justify="center" align="center" fill>
      <Card
        pad="medium"
        justify="center"
        align="center"
        gap="medium"
        width={{ min: "medium" }}
        height={{ min: "small" }}
        overflow="auto"
      >
        <CreateUser />
        <Text size="xsmall">
          {strings.users.count}: <UsersCount />
        </Text>
        <UsersTable />
      </Card>
    </Box>
  );
}
