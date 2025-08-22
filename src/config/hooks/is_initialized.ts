import { useBlocSelectState } from "@/bloc";
import { useCallback } from "@/utils";

import { ConfigContext, type ConfigState } from "..";

/**
 * A hook to check if the config is initialized.
 * @returns `true` if the config is initialized, otherwise `false`.
 */
export function useIsConfigInitialized(): boolean {
  return useBlocSelectState(
    ConfigContext,
    useCallback((state: ConfigState) => state.type !== "init", [])
  );
}
