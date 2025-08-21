import { useCallback } from "@/utils";
import { useBlocSelectState } from "@/bloc";
import { shallowEqual } from "react-redux";

import { ServicesContext, type ServicesState } from "..";
import { type ServiceID } from "../models";

export function useServicesIds(): ServiceID[] {
  return useBlocSelectState(
    ServicesContext,
    useCallback((state: ServicesState) => Object.keys(state) as ServiceID[], []),
    shallowEqual
  );
}
