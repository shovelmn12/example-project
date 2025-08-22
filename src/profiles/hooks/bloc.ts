import { useBloc } from "@/bloc";

import { ProfilesContext, type ProfilesBloc } from "..";

/**
 * A hook to get the profiles BLoC.
 * @returns The profiles BLoC.
 */
export function useProfilesBloc(): ProfilesBloc {
  return useBloc(ProfilesContext);
}
