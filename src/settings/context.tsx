import { createContext } from "@/utils";
import { EMPTY, type Bloc, type State } from "@/bloc";

import { type SettingsEvent, type SettingsData, type SettingsError } from ".";

/**
 * The settings state type.
 */
export type SettingsState = State<SettingsData, SettingsError>;

/**
 * The settings BLoC type.
 */
export type SettingsBloc = Bloc<SettingsEvent, SettingsState>;

/**
 * The settings context.
 */
export const SettingsContext = createContext<SettingsBloc>({
  ...EMPTY,
  state: {
    type: "init",
  },
});
