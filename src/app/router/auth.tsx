import { Box, GoogleSignInButton, type JSX } from "@/theme";

export function AuthScreen(): JSX.Element {
  return (
    <Box justify="center" align="center" fill>
      <GoogleSignInButton />
    </Box>
  );
}
