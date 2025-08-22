import { useBlocSelectState } from "@/bloc";
import { type ServiceState } from "@/services";
import { none, some, useCallback, type Option } from "@/utils";

import { ServiceContext } from "..";

/**
 * A hook to get the ID of a service.
 * @returns The ID of the service.
 */
export function useServiceID(): Option<string> {
  return useBlocSelectState(
    ServiceContext,
    useCallback((state: ServiceState) => {
      switch (state.type) {
        case "data":
          return some(state.value.id);

        case "error":
        case "loading":
          if (state.value._tag === "Some") {
            return some(state.value.value.id);
          }

          return none;

        default:
          return none;
      }
    }, [])
  );
}
