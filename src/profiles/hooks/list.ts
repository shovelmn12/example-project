import { useCallback } from "@/utils";
import { State, useBlocSelectState } from "@/bloc";

import { ProfilesContext, type ProfilesState } from "../context";
import { type Profile, type ProfilesError } from "../models";

export function useProfilesList(): State<Profile, ProfilesError>[] {
  return useBlocSelectState(
    ProfilesContext,
    useCallback((state: ProfilesState) => Object.values(state), [])
  );
}
