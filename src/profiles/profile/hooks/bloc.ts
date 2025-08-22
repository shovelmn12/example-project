import { useBloc } from "@/bloc";

import { ProfileContext, type ProfileBloc } from "..";

/**
 * A hook to get the profile BLoC.
 * @returns The profile BLoC.
 */
export function useProfileBloc(): ProfileBloc {
  return useBloc(ProfileContext);
}
