import { useBlocSelectState } from "@/bloc";

import { AuthContext, type AuthState } from "..";
import { useCallback } from "react";

export function useIsAuthInitialized(): boolean {
  return useBlocSelectState(
    AuthContext,
    useCallback((state: AuthState) => {
      switch (state.type) {
        case "data":
          return true;
        case "error":
        case "loading":
          return state.value._tag === "Some";

        default:
          return false;
      }
    }, [])
  );
}
