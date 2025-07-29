import { Box, Button, Card, Text, useLocation, type JSX } from "@/theme";
import { CreateUser, UsersCount, UsersTable } from "@/users";
import { ChevronLeft } from "lucide-react";
import { useCallback } from "react";

export function UsersScreen(): JSX.Element {
  const [, navigate] = useLocation();
  const onBack = useCallback(() => navigate(".."), [navigate]);

  return (
    <Box align="start" pad="medium" fill>
      <Button icon={<ChevronLeft size="16px" />} onClick={onBack} />
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
