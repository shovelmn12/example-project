import { UsersContext, type User } from "@/users";
import { useBlocSelectState } from "@/utils";

export function useUsersCount(): number {
  return useBlocSelectState(
    UsersContext,
    (state: Record<string, User>) => Object.keys(state).length
  );
}
