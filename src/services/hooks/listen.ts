import { useListen } from "@/events";

import { useServicesBloc } from "./bloc";

export function useListenToServices() {
  useListen("services", useServicesBloc().add);
}
