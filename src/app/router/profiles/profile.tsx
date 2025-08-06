import { ProfileNameComponent } from "@/profiles";
import { Page, PageContent, Text, type JSX } from "@/theme";

export function ProfileScreen(): JSX.Element {
  return (
    <Page>
      <PageContent justify="center" align="center" fill>
        <Text>
          <ProfileNameComponent />
        </Text>
      </PageContent>
    </Page>
  );
}
