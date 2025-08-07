import { useStrings } from "@/localizations";
import { Page, PageContent, Text, type JSX } from "@/theme";
import { ProjectsCount, ProjectsGrid } from "@/projects";

export function ProjectsScreen(): JSX.Element {
  const strings = useStrings();

  return (
    <Page fill>
      <PageContent pad="medium" fill>
        <Text size="xsmall">
          {strings.projects.count}: <ProjectsCount />
        </Text>
        <ProjectsGrid />
      </PageContent>
    </Page>
  );
}
