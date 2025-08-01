import { createContext } from "@/utils";
import { EMPTY, State, type Bloc } from "@/bloc";

import { type UsersEvent, type UsersError, type User } from "./models";

export type UsersState = Record<string, State<User, UsersError>>;

export type UsersBloc = Bloc<UsersEvent, UsersState>;

export const UsersContext = createContext<UsersBloc>({
  ...EMPTY,
  state: {},
});
