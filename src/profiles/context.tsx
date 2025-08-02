import { createContext } from "@/utils";
import { EMPTY, State, type Bloc } from "@/bloc";

import { type ProfilesEvent, type ProfilesError, type Profile } from "./models";

export type ProfilesState = Record<string, State<Profile, ProfilesError>>;

export type ProfilesBloc = Bloc<ProfilesEvent, ProfilesState>;

export const ProfilesContext = createContext<ProfilesBloc>({
  ...EMPTY,
  state: {},
});
