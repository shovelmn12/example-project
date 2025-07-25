import { UsersContext, type User } from "@/users";
import { useBlocSelectState } from "@/utils";

export function useUsersList(): User[] {
  return useBlocSelectState(UsersContext, (state: Record<string, User>) =>
    Object.values(state)
  );
}
