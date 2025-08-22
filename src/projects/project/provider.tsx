import { useMemo, memo } from "@/utils";
import { map } from "@/utils/rx";
import { useCreateBloc, type CreatePipeBlocProps } from "@/bloc";

import {
  type ProjectsEvent,
  ProjectContext,
  type ProjectState,
  useProjectsBloc,
} from "..";

/**
 * The props for the `ProjectProvider` component.
 */
export interface ProjectProviderProps {
  /**
   * The ID of the project.
   */
  readonly id: string;
}

/**
 * The internal provider for the project BLoC.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @param props.id The ID of the project.
 * @returns The project provider.
 */
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

/**
 * A provider for the project BLoC.
 */
export const ProjectProvider = memo(Provider);
