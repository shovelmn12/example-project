import { useCallback } from "@/utils";
import { State, useBlocSelectState } from "@/bloc";

import { UsersContext, type UsersState } from "../context";
import { type User, type UsersError } from "../models";

export function useUsersList(): State<User, UsersError>[] {
  return useBlocSelectState(
    UsersContext,
    useCallback((state: UsersState) => Object.values(state), [])
  );
}
