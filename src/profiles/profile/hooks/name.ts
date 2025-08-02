import { useBlocSelectState } from "@/bloc";
import { type ProfileName, type ProfileState } from "@/profiles";
import { none, some, type Option } from "@/utils";

import { ProfileContext } from "..";

export function useProfileName(): Option<ProfileName> {
  return useBlocSelectState(ProfileContext, (state: ProfileState) => {
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
  });
}
