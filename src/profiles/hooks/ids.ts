import { useCallback } from "@/utils";
import { useBlocSelectState } from "@/bloc";

import { ProfilesContext, type ProfilesState } from "../context";

/**
 * A hook to get the IDs of all profiles.
 * @returns The IDs of all profiles.
 */
export function useProfilesIDs(): string[] {
  return useBlocSelectState(
    ProfilesContext,
    useCallback((state: ProfilesState) => Object.keys(state), [])
  );
}
