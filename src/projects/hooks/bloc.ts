import { useBloc } from "@/bloc";

import { ProjectsContext, type ProjectsBloc } from "..";

export function useProjectsBloc(): ProjectsBloc {
  return useBloc(ProjectsContext);
}
