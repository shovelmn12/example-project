import { useCallback } from "@/utils";
import { useBlocSelectState } from "@/bloc";

import { ServicesContext, type ServicesState } from "..";

/**
 * A hook to get the IDs of all services.
 * @returns The IDs of all services.
 */
export function useServicesIDs(): string[] {
  return useBlocSelectState(
    ServicesContext,
    useCallback((state: ServicesState) => Object.keys(state), [])
  );
}
