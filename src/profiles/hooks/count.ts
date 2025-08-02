import { useCallback } from "@/utils";
import { useBlocSelectState } from "@/bloc";

import { ProfilesContext, type ProfilesState } from "..";

export function useProfilesCount(): number {
  return useBlocSelectState(
    ProfilesContext,
    useCallback((state: ProfilesState) => Object.keys(state).length, [])
  );
}
