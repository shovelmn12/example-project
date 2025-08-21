import { useBloc } from "@/bloc";

import { ServiceContext, type ServiceBloc } from "..";

export function useServiceBloc(): ServiceBloc {
  return useBloc(ServiceContext);
}
