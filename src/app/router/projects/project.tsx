import { ProjectNameComponent } from "@/projects";
import { Box, Card, Text, type JSX } from "@/theme";

export function ProjectScreen(): JSX.Element {
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
        <Text>
          <ProjectNameComponent />
        </Text>
      </Card>
    </Box>
  );
}
