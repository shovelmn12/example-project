import { createContext } from "@/utils";
import { EMPTY, State, type Bloc } from "@/bloc";

import { type ProfilesEvent, type ProfilesError, type Profile } from "./models";

/**
 * The profiles state type.
 */
export type ProfilesState = Record<string, State<Profile, ProfilesError>>;

/**
 * The profiles BLoC type.
 */
export type ProfilesBloc = Bloc<ProfilesEvent, ProfilesState>;

/**
 * The profiles context.
 */
export const ProfilesContext = createContext<ProfilesBloc>({
  ...EMPTY,
  state: {},
});
