import { useBloc } from "@/bloc";

import { AuthContext, type AuthBloc } from "..";

/**
 * A hook to get the auth BLoC.
 * @returns The auth BLoC.
 */
export function useAuthBloc(): AuthBloc {
  return useBloc(AuthContext);
}
