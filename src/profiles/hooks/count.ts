import { useCallback } from "@/utils";
import { useBlocSelectState } from "@/bloc";

import { ProfilesContext, type ProfilesState } from "..";

/**
 * A hook to get the number of profiles.
 * @returns The number of profiles.
 */
export function useProfilesCount(): number {
  return useBlocSelectState(
    ProfilesContext,
    useCallback((state: ProfilesState) => Object.keys(state).length, [])
  );
}
