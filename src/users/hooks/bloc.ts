import { UsersContext, type UsersBloc } from "@/users";
import { useBloc } from "@/utils";

export function useUsersBloc(): UsersBloc {
  return useBloc(UsersContext);
}
