import { Button, Box, type JSX } from "@/theme";
import { useCallback } from "react";
import { useLocation } from "wouter";

export function HomeScreen(): JSX.Element {
  const [, navigate] = useLocation();
  const onClick = useCallback(() => navigate("/users"), [navigate]);

  return (
    // <Box justify="center" align="center" fill>
    <Button onPress={onClick} size="lg">
      Users
    </Button>
    // </Box>
  );
}
