import { createContext } from "@/utils";
import { EMPTY, type Bloc, type State } from "@/bloc";

import { type ConfigEvent, type ConfigData, type ConfigError } from ".";

/**
 * The config state type.
 */
export type ConfigState = State<ConfigData, ConfigError>;

/**
 * The config BLoC type.
 */
export type ConfigBloc = Bloc<ConfigEvent, ConfigState>;

/**
 * The config context.
 */
export const ConfigContext = createContext<ConfigBloc>({
  ...EMPTY,
  state: {
    type: "init",
  },
});
