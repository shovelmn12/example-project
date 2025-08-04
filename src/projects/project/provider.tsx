import { useMemo, memo } from "@/utils";
import { map } from "@/utils/rx";
import { useCreateBloc, type CreatePipeBlocProps } from "@/bloc";

import {
  type ProjectsEvent,
  ProjectContext,
  type ProjectState,
  useProjectsBloc,
} from "..";

export interface ProjectProviderProps {
  readonly id: string;
}

function Provider({
  children,
  id,
}: React.PropsWithChildren<ProjectProviderProps>) {
  const projects = useProjectsBloc();
  const bloc = useCreateBloc(
    useMemo<CreatePipeBlocProps<ProjectsEvent, ProjectState>>(
      () => ({
        initialState: projects.state[id] ?? { type: "init" },
        source$: projects.state$.pipe(
          map((state) => state[id] ?? { type: "init" })
        ),
      }),
      [projects, id]
    )
  );

  return (
    <ProjectContext.Provider value={bloc}>{children}</ProjectContext.Provider>
  );
}

export const ProjectProvider = memo(Provider);
