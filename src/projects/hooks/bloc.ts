import { useBloc } from "@/bloc";

import { ProjectsContext, type ProjectsBloc } from "..";

/**
 * A hook to get the projects BLoC.
 * @returns The projects BLoC.
 */
export function useProjectsBloc(): ProjectsBloc {
  return useBloc(ProjectsContext);
}
