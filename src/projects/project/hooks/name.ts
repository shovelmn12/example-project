import { useBlocSelectState } from "@/bloc";
import { type ProjectState } from "@/projects";
import { none, some, useCallback, type Option } from "@/utils";

import { ProjectContext } from "..";

/**
 * A hook to get the name of a project.
 * @returns The name of the project.
 */
export function useProjectName(): Option<string> {
  return useBlocSelectState(
    ProjectContext,
    useCallback((state: ProjectState) => {
      switch (state.type) {
        case "data":
          return some(state.value.name);

        case "error":
        case "loading":
          if (state.value._tag === "Some") {
            return some(state.value.value.name);
          }

          return none;

        default:
          return none;
      }
    }, [])
  );
}
