import { useCallback } from "@/utils";
import { useBlocSelectState } from "@/bloc";

import { UsersContext } from "../context";
import { type User } from "../models";

export function useUsersList(): User[] {
  return useBlocSelectState(
    UsersContext,
    useCallback((state: Record<string, User>) => Object.values(state), [])
  );
}
