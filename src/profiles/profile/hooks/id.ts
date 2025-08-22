import { useBlocSelectState } from "@/bloc";
import { type ProfileState } from "@/profiles";
import { none, some, useCallback, type Option } from "@/utils";

import { ProfileContext } from "..";

/**
 * A hook to get the ID of a profile.
 * @returns The ID of the profile.
 */
export function useProfileID(): Option<string> {
  return useBlocSelectState(
    ProfileContext,
    useCallback((state: ProfileState) => {
      switch (state.type) {
        case "data":
          return some(state.value.id);

        case "error":
        case "loading":
          if (state.value._tag === "Some") {
            return some(state.value.value.id);
          }

          return none;

        default:
          return none;
      }
    }, [])
  );
}
