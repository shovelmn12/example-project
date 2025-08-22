import { useCallback } from "@/utils";
import { useBlocSelectState } from "@/bloc";

import { ProjectsContext, type ProjectsState } from "../context";

/**
 * A hook to get the IDs of all projects.
 * @returns The IDs of all projects.
 */
export function useProjectsIDs(): string[] {
  return useBlocSelectState(
    ProjectsContext,
    useCallback((state: ProjectsState) => Object.keys(state), [])
  );
}
