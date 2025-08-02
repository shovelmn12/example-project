import { useBloc } from "@/bloc";

import { ProfileContext, type ProfileBloc } from "..";

export function useProfileBloc(): ProfileBloc {
  return useBloc(ProfileContext);
}
