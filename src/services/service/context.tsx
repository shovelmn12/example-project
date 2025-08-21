import { createContext } from "@/utils";
import { EMPTY, type Bloc } from "@/bloc";

import { type ServiceState, type ServicesEvent } from "..";

export type ServiceBloc = Bloc<ServicesEvent, ServiceState>;

export const ServiceContext = createContext<ServiceBloc>({
  ...EMPTY,
  state: {
    type: "init",
  },
});
