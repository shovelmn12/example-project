import { ThemeSelector } from "@/settings";
import {
  Box,
  Page,
  PageContent,
  PageHeader,
  Switch,
  Text,
  type JSX,
} from "@/theme";

/**
 * The settings screen.
 * @returns The `SettingsScreen` component.
 */
export function SettingsScreen(): JSX.Element {
  return (
    <Page fill>
      <PageContent fill>
        <PageHeader title="Settings" />
        <Box pad={{ top: "small" }} direction="row" gap="medium" align="center">
          <Text>Theme</Text>
          <ThemeSelector />
        </Box>
        <Box pad={{ top: "small" }} direction="row" gap="medium" align="center">
          <Text>Theme</Text>
          <Switch />
        </Box>
      </PageContent>
    </Page>
  );
}
