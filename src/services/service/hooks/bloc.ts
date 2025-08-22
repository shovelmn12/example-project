import { useBloc } from "@/bloc";

import { ServiceContext, type ServiceBloc } from "..";

/**
 * A hook to get the service BLoC.
 * @returns The service BLoC.
 */
export function useServiceBloc(): ServiceBloc {
  return useBloc(ServiceContext);
}
