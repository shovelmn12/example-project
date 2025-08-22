import { useBloc } from "@/bloc";

import { SettingsContext, type SettingsBloc } from "..";

/**
 * A hook to get the settings BLoC.
 * @returns The settings BLoC.
 */
export function useSettingsBloc(): SettingsBloc {
  return useBloc(SettingsContext);
}
