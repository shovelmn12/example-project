import { useBloc } from "@/bloc";

import { ConfigContext, type ConfigBloc } from "..";

/**
 * A hook to get the config BLoC.
 * @returns The config BLoC.
 */
export function useConfigBloc(): ConfigBloc {
  return useBloc(ConfigContext);
}
