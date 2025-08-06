import { createContext } from "@/utils";
import { EMPTY, type Bloc, type State } from "@/bloc";

import { type SettingsEvent, type SettingsData, type SettingsError } from ".";

export type SettingsState = State<SettingsData, SettingsError>;

export type SettingsBloc = Bloc<SettingsEvent, SettingsState>;

export const SettingsContext = createContext<SettingsBloc>({
  ...EMPTY,
  state: {
    type: "init",
  },
});
