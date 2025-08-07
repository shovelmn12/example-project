import { ProjectNameComponent } from "@/projects";
import { Page, PageContent, Text, type JSX } from "@/theme";

export function ProjectScreen(): JSX.Element {
  return (
    <Page>
      <PageContent justify="center" align="center" fill>
        <Text>
          <ProjectNameComponent />
        </Text>
      </PageContent>
    </Page>
  );
}
