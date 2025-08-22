import { useBlocSelectState } from "@/bloc";
import { type ProfileName, type ProfileState } from "@/profiles";
import { none, some, useCallback, type Option } from "@/utils";

import { ProfileContext } from "..";

/**
 * A hook to get the name of a profile.
 * @returns The name of the profile.
 */
export function useProfileName(): Option<ProfileName> {
  return useBlocSelectState(
    ProfileContext,
    useCallback((state: ProfileState) => {
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
