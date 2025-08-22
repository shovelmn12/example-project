import { useCallback } from "@/utils";
import { useBlocSelectState } from "@/bloc";

import { ProjectsContext, type ProjectsState } from "..";

/**
 * A hook to get the number of projects.
 * @returns The number of projects.
 */
export function useProjectsCount(): number {
  return useBlocSelectState(
    ProjectsContext,
    useCallback((state: ProjectsState) => Object.keys(state).length, [])
  );
}
