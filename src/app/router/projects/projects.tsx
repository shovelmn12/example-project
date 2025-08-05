import { useStrings } from "@/localizations";
import { Box, Text, type JSX } from "@/theme";
import { ProjectsCount, ProjectsGrid } from "@/projects";

export function ProjectsScreen(): JSX.Element {
  const strings = useStrings();

  return (
    <Box pad="medium" fill>
      <Text size="xsmall">
        {strings.projects.count}: <ProjectsCount />
      </Text>
      <ProjectsGrid />
    </Box>
  );
}
