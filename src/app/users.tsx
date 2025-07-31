import { Box, Button, Card, Text, type JSX } from "@/theme";
import { Previous } from "@/theme/icons";
import { CreateUser, UsersCount, UsersTable } from "@/users";
import { useLocation, useCallback } from "@/utils";

export function UsersScreen(): JSX.Element {
  const [, navigate] = useLocation();
  const onBack = useCallback(() => navigate(".."), [navigate]);

  return (
    <Box align="start" pad="medium" fill>
      <Button icon={<Previous />} onClick={onBack} />
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
            User Count: <UsersCount />
          </Text>
          <UsersTable />
        </Card>
      </Box>
    </Box>
  );
}
