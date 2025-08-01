import { useBlocSelectState } from "@/bloc";

import { AuthContext, type AuthState } from "..";

export function useIsAuth(): boolean {
  return useBlocSelectState(
    AuthContext,
    (state: AuthState) => state.type === "data" && state.value._tag === "Some"
  );
}
