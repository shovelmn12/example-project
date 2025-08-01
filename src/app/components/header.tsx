import { LogoutButton } from "@/authentication";
import { Button, Header as GHeader, Box, type JSX } from "@/theme";
import { Previous } from "@/theme/icons";
import { useCallback, useLocation } from "@/utils";

export function Header(): JSX.Element {
  const [path, navigate] = useLocation();
  const onBack = useCallback(() => navigate(".."), [navigate]);
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
      <LogoutButton />
    </GHeader>
  );
}
