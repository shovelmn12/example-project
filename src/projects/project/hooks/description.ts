import { useBlocSelectState } from "@/bloc";
import { type ProjectState } from "@/projects";
import { none, some, useCallback, type Option } from "@/utils";

import { ProjectContext } from "..";

export function useProjectDescription(): Option<string> {
  return useBlocSelectState(
    ProjectContext,
    useCallback((state: ProjectState) => {
      switch (state.type) {
        case "data":
          return some(state.value.description);

        case "error":
        case "loading":
          if (state.value._tag === "Some") {
            return some(state.value.value.description);
          }

          return none;

        default:
          return none;
      }
    }, [])
  );
}
