import { useBloc } from "@/bloc";

import { ConfigContext, type ConfigBloc } from "..";

export function useConfigBloc(): ConfigBloc {
  return useBloc(ConfigContext);
}
