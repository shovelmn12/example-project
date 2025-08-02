import { useStrings } from "@/localizations";
import { Button, Box, type JSX } from "@/theme";
import { useCallback, useLocation } from "@/utils";

export function HomeScreen(): JSX.Element {
  const [, navigate] = useLocation();
  const strings = useStrings();
  const onClick = useCallback(() => navigate("/profiles"), [navigate]);

  return (
    <Box justify="center" align="center" fill>
      <Button onClick={onClick} label={strings.home.actions.go_to_profiles} />
    </Box>
  );
}
