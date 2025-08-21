import { EMPTY, State, type Bloc, type DataState } from "@/bloc";
import { createContext } from "@/utils";

import { type Service, type ServicesEvent, type ServicesError } from ".";

export type ServiceState = State<Service, ServicesError>;

export type ServicesState = Record<string, DataState<Service>>;

export type ServicesBloc = Bloc<ServicesEvent, ServicesState>;

export const ServicesContext = createContext<ServicesBloc>({
  ...EMPTY,
  state: {},
});
