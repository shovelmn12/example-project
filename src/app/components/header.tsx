import { useEventsBus } from "@/events";
import { useStrings } from "@/localizations";
import {
  Header as GHeader,
  Box,
  type JSX,
  Menu,
  Avatar,
  type MenuChildrenProps,
  Text,
} from "@/theme";
import { Logout, SettingsOption, User } from "@/theme/icons";
import { useLocation, useMemo } from "@/utils";

/**
 * The header component.
 * @returns The `Header` component.
 */
export function Header(): JSX.Element {
  const strings = useStrings();
  const bus = useEventsBus();
  const [, navigate] = useLocation();

  return (
    <GHeader
      justify="end"
      pad="xsmall"
      animation="fadeIn"
      background="background-contrast"
    >
      <Menu
        size="large"
        dropProps={{
          align: { top: "bottom", left: "left" },
          elevation: "xlarge",
        }}
        items={useMemo(
          () => [
            {
              label: (
                <Text alignSelf="center">
                  {strings.header.actions.settings}
                </Text>
              ),
              icon: (
                <Box pad="xsmall">
                  {" "}
                  <SettingsOption />
                </Box>
              ),
              onClick: () => navigate("~/settings"),
            },
            {
              label: (
                <Text alignSelf="center">{strings.header.actions.logout}</Text>
              ),
              icon: (
                <Box pad="xsmall">
                  <Logout />
                </Box>
              ),
              onClick: () => bus.emit("auth", { type: "logout" }),
            },
          ],
          [bus, navigate, strings]
        )}
        plain
      >
        {({ disabled, drop, hover }: MenuChildrenProps) => {
          const color = hover && !drop && !disabled ? "focus" : undefined;

          return (
            <Avatar background="brand">
              <User color={color} />
            </Avatar>
          );
        }}
      </Menu>
    </GHeader>
  );
}
