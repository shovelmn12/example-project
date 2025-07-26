import { UsersContext } from "../context";
import { type User } from "../models";
import { useBlocSelectState, useCallback } from "@/utils";

export function useUsersCount(): number {
  return useBlocSelectState(
    UsersContext,
    useCallback((state: Record<string, User>) => Object.keys(state).length, [])
  );
}
