import { useBloc } from "@/bloc";

import { UsersContext, type UsersBloc } from "..";

export function useUsersBloc(): UsersBloc {
  return useBloc(UsersContext);
}
