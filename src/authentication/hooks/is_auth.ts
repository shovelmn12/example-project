import { useBlocSelectState } from "@/bloc";

import { AuthContext, type AuthState } from "..";

/**
 * A hook to check if the user is authenticated.
 * @returns `true` if the user is authenticated, otherwise `false`.
 */
export function useIsAuth(): boolean {
  return useBlocSelectState(
    AuthContext,
    (state: AuthState) => state.type === "data" && state.value._tag === "Some"
  );
}
