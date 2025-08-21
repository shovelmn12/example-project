import { useContext } from "@/utils";

import { ServicesContext, type ServicesBloc } from "..";

export function useServicesBloc(): ServicesBloc {
  return useContext(ServicesContext);
}
