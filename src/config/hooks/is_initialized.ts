import { useBlocSelectState } from "@/bloc";
import { useCallback } from "@/utils";

import { ConfigContext, type ConfigState } from "..";

export function useIsConfigInitialized(): boolean {
  return useBlocSelectState(
    ConfigContext,
    useCallback((state: ConfigState) => state.type !== "init", [])
  );
}
