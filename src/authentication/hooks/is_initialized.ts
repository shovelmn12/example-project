import { useBlocSelectState } from "@/bloc";
import { useCallback } from "@/utils";

import { AuthContext, type AuthState } from "..";

export function useIsAuthInitialized(): boolean {
  return useBlocSelectState(
    AuthContext,
    useCallback((state: AuthState) => state.type !== "init", [])
  );
}
