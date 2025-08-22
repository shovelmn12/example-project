import { createContext } from "@/utils";
import { EMPTY, State, type Bloc } from "@/bloc";

import { type ProfilesError, type ProfilesEvent, type Profile } from "..";

/**
 * The profile state type.
 */
export type ProfileState = State<Profile, ProfilesError>;

/**
 * The profile BLoC type.
 */
export type ProfileBloc = Bloc<ProfilesEvent, ProfileState>;

/**
 * The profile context.
 */
export const ProfileContext = createContext<ProfileBloc>({
  ...EMPTY,
  state: {
    type: "init",
  },
});
