import { useCallback } from "@/utils";
import { useBlocSelectState } from "@/bloc";

import { UsersContext, type UsersState } from "..";

export function useUsersCount(): number {
  return useBlocSelectState(
    UsersContext,
    useCallback((state: UsersState) => Object.keys(state).length, [])
  );
}
