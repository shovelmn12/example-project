import { useBloc } from "@/bloc";

import { SettingsContext, type SettingsBloc } from "..";

export function useSettingsBloc(): SettingsBloc {
  return useBloc(SettingsContext);
}
