import { useBloc } from "@/bloc";

import { UsersContext, type UsersBloc } from "../context";

export function useUsersBloc(): UsersBloc {
  return useBloc(UsersContext);
}
