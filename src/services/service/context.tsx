import { createContext } from "@/utils";
import { EMPTY, type Bloc } from "@/bloc";

import { type ServiceState, type ServicesEvent } from "..";

/**
 * The service BLoC type.
 */
export type ServiceBloc = Bloc<ServicesEvent, ServiceState>;

/**
 * The service context.
 */
export const ServiceContext = createContext<ServiceBloc>({
  ...EMPTY,
  state: {
    type: "init",
  },
});
