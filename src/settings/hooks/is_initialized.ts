import { useBlocSelectState } from "@/bloc";
import { useCallback } from "@/utils";

import { SettingsContext, type SettingsState } from "..";

export function useIsSettingsInitialized(): boolean {
  return useBlocSelectState(
    SettingsContext,
    useCallback((state: SettingsState) => state.type !== "init", [])
  );
}
