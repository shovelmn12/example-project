import { useBlocSelectState } from "@/bloc";
import { useCallback } from "@/utils";

import { SettingsContext, type SettingsState, type ThemeMode } from "..";

/**
 * A hook to get the theme mode.
 * @returns The theme mode.
 */
export function useSettingsThemeMode(): ThemeMode {
  return useBlocSelectState(
    SettingsContext,
    useCallback((state: SettingsState) => {
      switch (state.type) {
        case "data":
          return state.value.theme.mode;

        case "error":
        case "loading":
          if (state.value._tag === "Some") {
            return state.value.value.theme.mode;
          }

          return "light";

        default:
          return "light";
      }
    }, [])
  );
}
