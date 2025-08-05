import { ProjectProvider } from "@/projects";
import { Box, type JSX, Route, Router, WSwitch } from "@/theme";
import { lazy } from "@/utils";

const ProjectsScreen = lazy(async () => ({
  default: (await import("./projects")).ProjectsScreen,
}));
const ProjectScreen = lazy(async () => ({
  default: (await import("./project")).ProjectScreen,
}));

export function ProjectsRouter(): JSX.Element {
  return (
    <Router base="/projects">
      <WSwitch>
        <Route path="/:id">
          {(params) => (
            <ProjectProvider id={params.id}>
              <Box animation="fadeIn" fill>
                <ProjectScreen />
              </Box>
            </ProjectProvider>
          )}
        </Route>
        <Route>
          <Box animation="fadeIn" fill>
            <ProjectsScreen />
          </Box>
        </Route>
      </WSwitch>
    </Router>
  );
}
