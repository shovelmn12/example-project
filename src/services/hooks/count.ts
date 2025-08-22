import { useCallback } from "@/utils";
import { useBlocSelectState } from "@/bloc";

import { ServicesContext, type ServicesState } from "..";

/**
 * A hook to get the number of services.
 * @returns The number of services.
 */
export function useServicesCount(): number {
  return useBlocSelectState(
    ServicesContext,
    useCallback((state: ServicesState) => Object.keys(state).length, [])
  );
}
