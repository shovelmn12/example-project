import { LogoutButton } from "@/authentication";
import { Header as GHeader, type JSX } from "@/theme";

export function Header(): JSX.Element {
  return (
    <GHeader justify="end" pad="xsmall">
      <LogoutButton />
    </GHeader>
  );
}
