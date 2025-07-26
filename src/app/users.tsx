import { Box, Button, Card, useLocation } from "@/theme";
import { CreateUser, UsersCount, UsersTable } from "@/users";
import type { JSX } from "@/theme";
import { Previous } from "grommet-icons";
import { useCallback } from "react";

export function UsersScreen(): JSX.Element {
  const [, navigate] = useLocation();
  const onBack = useCallback(() => navigate(".."), [navigate]);

  return (
    <Box align="start" pad="medium" fill>
      <Button onPress={onBack}>
        <Previous />
      </Button>
      <Box justify="center" align="center" fill>
        <Card>
          <CreateUser />
          <>
            User Count: <UsersCount />
          </>
          <UsersTable />
        </Card>
      </Box>
    </Box>
  );
}
