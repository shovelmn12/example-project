import { useStrings } from "@/localizations";
import { Box, Card, Text, type JSX } from "@/theme";
import { ProjectsCount, ProjectsGrid } from "@/projects";

export function ProjectsScreen(): JSX.Element {
  const strings = useStrings();

  return (
    <Box justify="center" align="center" fill>
      <Card
        pad="medium"
        justify="center"
        align="center"
        gap="medium"
        width={{ min: "medium" }}
        height={{ min: "small" }}
        overflow="auto"
      >
        <Text size="xsmall">
          {strings.projects.count}: <ProjectsCount />
        </Text>
        <ProjectsGrid />
      </Card>
    </Box>
  );
}
