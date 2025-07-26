import { UsersContext } from "../context";
import { type User } from "../models";
import { useBlocSelectState, useCallback } from "@/utils";

export function useUsersList(): User[] {
  return useBlocSelectState(
    UsersContext,
    useCallback((state: Record<string, User>) => Object.values(state), [])
  );
}
