import { useBlocSelectState } from "@/bloc";
import { useCallback } from "@/utils";

import { SettingsContext, type SettingsState } from "..";

/**
 * A hook to check if the settings are initialized.
 * @returns `true` if the settings are initialized, otherwise `false`.
 */
export function useIsSettingsInitialized(): boolean {
  return useBlocSelectState(
    SettingsContext,
    useCallback((state: SettingsState) => state.type !== "init", [])
  );
}
