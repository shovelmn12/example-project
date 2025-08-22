import { useStrings } from "@/localizations";
import { Card, Page, PageContent, Text, type JSX } from "@/theme";
import { CreateProfile, ProfilesCount, ProfilesTable } from "@/profiles";

/**
 * The profiles screen.
 * @returns The `ProfilesScreen` component.
 */
export function ProfilesScreen(): JSX.Element {
  const strings = useStrings();

  return (
    <Page fill>
      <PageContent justify="center" align="center" fill>
        <Card
          pad="medium"
          justify="center"
          align="center"
          gap="medium"
          width={{ min: "medium" }}
          height={{ min: "small" }}
          overflow="auto"
        >
          <CreateProfile />
          <Text size="xsmall">
            {strings.profiles.count}: <ProfilesCount />
          </Text>
          <ProfilesTable />
        </Card>
      </PageContent>
    </Page>
  );
}
