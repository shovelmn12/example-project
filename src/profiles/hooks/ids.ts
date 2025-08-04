import { useCallback } from "@/utils";
import { useBlocSelectState } from "@/bloc";

import { ProfilesContext, type ProfilesState } from "../context";

export function useProfilesIDs(): string[] {
  return useBlocSelectState(
    ProfilesContext,
    useCallback((state: ProfilesState) => Object.keys(state), [])
  );
}
