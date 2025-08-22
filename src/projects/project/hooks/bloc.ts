import { useBloc } from "@/bloc";

import { ProjectContext, type ProjectBloc } from "..";

/**
 * A hook to get the project BLoC.
 * @returns The project BLoC.
 */
export function useProjectBloc(): ProjectBloc {
  return useBloc(ProjectContext);
}
