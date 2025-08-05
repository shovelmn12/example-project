import { useCallback } from "@/utils";
import { useBlocSelectState } from "@/bloc";

import { ProjectsContext, type ProjectsState } from "..";

export function useProjectsCount(): number {
  return useBlocSelectState(
    ProjectsContext,
    useCallback((state: ProjectsState) => Object.keys(state).length, [])
  );
}
