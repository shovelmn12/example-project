import { useBlocSelectState } from "@/bloc";
import { useCallback } from "@/utils";

import { AuthContext, type AuthState } from "..";

/**
 * A hook to check if the auth is initialized.
 * @returns `true` if the auth is initialized, otherwise `false`.
 */
export function useIsAuthInitialized(): boolean {
  return useBlocSelectState(
    AuthContext,
    useCallback((state: AuthState) => state.type !== "init", [])
  );
}
