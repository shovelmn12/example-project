import { useCallback } from "@/utils";
import { useBlocSelectState } from "@/bloc";

import { ProjectsContext, type ProjectsState } from "../context";

export function useProjectsIDs(): string[] {
  return useBlocSelectState(
    ProjectsContext,
    useCallback((state: ProjectsState) => Object.keys(state), [])
  );
}
