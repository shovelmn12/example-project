import { useBloc } from "@/bloc";

import { ProjectContext, type ProjectBloc } from "..";

export function useProjectBloc(): ProjectBloc {
  return useBloc(ProjectContext);
}
