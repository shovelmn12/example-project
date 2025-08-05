import { Grid, type JSX } from "@/theme";
import { useCallback, useLocation, useMemo } from "@/utils";

import {
  CreateProject,
  ProjectCard,
  ProjectProvider,
  useProjectsIDs,
} from "..";

interface ID {
  readonly id: string;
}

export function ProjectsGrid(): JSX.Element {
  const [, navigate] = useLocation();
  const ids = useProjectsIDs();
  const data: ID[] = useMemo(
    () =>
      ids.map((id) => ({
        id,
      })),
    [ids]
  );
  const createOnClick = useCallback(
    (id: string) => () => navigate(`~/projects/${id}`),
    [navigate]
  );

  return (
    <Grid
      columns={{
        count: 4,
        size: "medium",
      }}
      rows="small"
      gap="small"
    >
      <CreateProject />
      {data.map(({ id }) => (
        <ProjectProvider key={`project-grid-${id}`} id={id}>
          <ProjectCard onClick={createOnClick(id)} />
        </ProjectProvider>
      ))}
    </Grid>
  );
}
