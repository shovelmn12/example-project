import { useContext } from "@/utils";

import { ServicesContext, type ServicesBloc } from "..";

/**
 * A hook to get the services BLoC.
 * @returns The services BLoC.
 */
export function useServicesBloc(): ServicesBloc {
  return useContext(ServicesContext);
}
