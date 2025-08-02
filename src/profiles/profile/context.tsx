import { createContext } from "@/utils";
import { EMPTY, State, type Bloc } from "@/bloc";

import { type ProfilesError, type ProfilesEvent, type Profile } from "..";

export type ProfileState = State<Profile, ProfilesError>;

export type ProfileBloc = Bloc<ProfilesEvent, ProfileState>;

export const ProfileContext = createContext<ProfileBloc>({
  ...EMPTY,
  state: {
    type: "init",
  },
});
