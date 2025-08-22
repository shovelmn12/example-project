import { EMPTY, State, type Bloc, type DataState } from "@/bloc";
import { createContext } from "@/utils";

import { type Service, type ServicesEvent, type ServicesError } from ".";

/**
 * The service state type.
 */
export type ServiceState = State<Service, ServicesError>;

/**
 * The services state type.
 */
export type ServicesState = Record<string, DataState<Service>>;

/**
 * The services BLoC type.
 */
export type ServicesBloc = Bloc<ServicesEvent, ServicesState>;

/**
 * The services context.
 */
export const ServicesContext = createContext<ServicesBloc>({
  ...EMPTY,
  state: {},
});
