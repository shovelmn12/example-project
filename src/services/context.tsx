import { type Bloc, type DataState } from "@/bloc";
import { createContext } from "@/utils";

import { type Service, type ServiceID } from "./models";
import { type ServicesEvent } from "./models";

export type ServicesState = Record<ServiceID, DataState<Service>>;

export type ServicesBloc = Bloc<ServicesEvent, ServicesState>;

export const ServicesContext = createContext<ServicesBloc>("ServicesBloc");
