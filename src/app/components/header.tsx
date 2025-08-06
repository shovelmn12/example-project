import { LogoutButton } from "@/authentication";
import { ThemeSelector } from "@/settings";
import { Button, Header as GHeader, Box, type JSX } from "@/theme";
import { Previous } from "@/theme/icons";
import { useCallback, useLocation } from "@/utils";

export function Header(): JSX.Element {
  const [path] = useLocation();
  const onBack = useCallback(() => window.history.back(), []);
  const isHome = path === "/";

  return (
    <GHeader
      justify={isHome ? "end" : "between"}
      pad="xsmall"
      animation="fadeIn"
    >
      {!isHome && (
        <Box animation="fadeIn">
          <Button icon={<Previous />} onClick={onBack} />
        </Box>
      )}
      <Box direction="row" gap="small">
        <ThemeSelector />
        <LogoutButton />
      </Box>
    </GHeader>
  );
}
