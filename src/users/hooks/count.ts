import { UsersContext } from "../context";
import { type User } from "../models";
import { useBlocSelectState } from "@/utils";

export function useUsersCount(): number {
  return useBlocSelectState(
    UsersContext,
    (state: Record<string, User>) => Object.keys(state).length
  );
}
