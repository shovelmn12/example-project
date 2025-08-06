import { useBlocSelectState } from "@/bloc";
import { useCallback } from "@/utils";

import { SettingsContext, type SettingsState, type ThemeType } from "..";

export function useSettingsTheme(): ThemeType {
  return useBlocSelectState(
    SettingsContext,
    useCallback((state: SettingsState) => {
      switch (state.type) {
        case "data":
          return state.value.theme;

        case "error":
        case "loading":
          if (state.value._tag === "Some") {
            return state.value.value.theme;
          }

          return "light";

        default:
          return "light";
      }
    }, [])
  );
}
