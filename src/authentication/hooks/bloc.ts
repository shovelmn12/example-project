import { useBloc } from "@/bloc";

import { AuthContext, type AuthBloc } from "..";

export function useAuthBloc(): AuthBloc {
  return useBloc(AuthContext);
}
