import { useCallback } from "@/utils";
import { useBlocSelectState } from "@/bloc";

import { ServicesContext, type ServicesState } from "..";

export function useServicesCount(): number {
  return useBlocSelectState(
    ServicesContext,
    useCallback((state: ServicesState) => Object.keys(state).length, [])
  );
}
