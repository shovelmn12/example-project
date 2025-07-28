import { Box, Button, Card, useLocation } from "@/theme";
import { CreateUser, UsersCount, UsersTable } from "@/users";
import { type JSX, Icons } from "@/theme";
import { useCallback } from "react";

export function UsersScreen(): JSX.Element {
  const [, navigate] = useLocation();
  const onBack = useCallback(() => navigate(".."), [navigate]);

  return (
    <Box align="start" pad="medium" fill>
      <Button onClick={onBack}>
        <Icons.ChevronLeft />
      </Button>
      <Box justify="center" align="center" fill>
        <Card>
          <Box
            pad="medium"
            justify="center"
            align="center"
            gap="medium"
            direction="row"
          >
            <CreateUser />
            <>
              User Count: <UsersCount />
            </>
            <UsersTable />
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
