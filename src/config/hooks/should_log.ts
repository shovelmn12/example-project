import { useBlocSelectState } from "@/bloc";
import { useCallback } from "@/utils";

import { ConfigContext, type ConfigState } from "..";

/**
 * A hook to check if the app should log.
 * @returns `true` if the app should log, otherwise `false`.
 */
export function useConfigShouldLog(): boolean {
  return useBlocSelectState(
    ConfigContext,
    useCallback((state: ConfigState) => {
      switch (state.type) {
        case "data":
          return state.value.log;

        case "error":
        case "loading":
          return state.value._tag === "Some" && state.value.value.log;

        default:
          return false;
      }
    }, [])
  );
}
