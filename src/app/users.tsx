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
          <UsersCount />
          <UsersTable />
        </Card>
      </Box>
    </Box>
  );
}
