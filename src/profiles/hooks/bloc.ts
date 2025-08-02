import { useBloc } from "@/bloc";

import { ProfilesContext, type ProfilesBloc } from "..";

export function useProfilesBloc(): ProfilesBloc {
  return useBloc(ProfilesContext);
}
