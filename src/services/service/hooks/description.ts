import { useBlocSelectState } from "@/bloc";
import { type ServiceState } from "@/services";
import { none, some, useCallback, type Option } from "@/utils";

import { ServiceContext } from "..";

export function useServiceDescription(): Option<string> {
  return useBlocSelectState(
    ServiceContext,
    useCallback((state: ServiceState) => {
      switch (state.type) {
        case "data":
          return some(state.value.description);

        case "error":
        case "loading":
          if (state.value._tag === "Some") {
            return some(state.value.value.description);
          }

          return none;

        default:
          return none;
      }
    }, [])
  );
}
