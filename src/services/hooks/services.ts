import { useCallback } from "@/utils";
import { useBlocSelectState } from "@/bloc";
import { shallowEqual } from "react-redux";

import { ServicesContext, type ServicesState, type Service } from "..";

export function useServices(): Service[] {
  return useBlocSelectState(
    ServicesContext,
    useCallback(
      (state: ServicesState) =>
        Object.values(state)
          .map((s) => (s.type === "data" ? s.value : null))
          .filter((s): s is Service => s !== null),
      []
    ),
    shallowEqual
  );
}
