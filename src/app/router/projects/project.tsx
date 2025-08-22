import { ProjectNameComponent } from "@/projects";
import { Page, PageContent, Text, type JSX } from "@/theme";

/**
 * The project screen.
 * @returns The `ProjectScreen` component.
 */
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
