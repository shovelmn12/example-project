import { createContext } from "@/utils";
import { EMPTY, type Bloc, type State } from "@/bloc";

import { type ConfigEvent, type ConfigData, type ConfigError } from ".";

export type ConfigState = State<ConfigData, ConfigError>;

export type ConfigBloc = Bloc<ConfigEvent, ConfigState>;

export const ConfigContext = createContext<ConfigBloc>({
  ...EMPTY,
  state: {
    type: "init",
  },
});
