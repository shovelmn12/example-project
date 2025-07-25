import { UsersContext, type UsersBloc } from "../context";
import { useBloc } from "@/utils";

export function useUsersBloc(): UsersBloc {
  return useBloc(UsersContext);
}
