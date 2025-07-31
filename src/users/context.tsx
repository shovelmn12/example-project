import { createContext, EMPTY, type Bloc } from "@/utils";

import { type UsersEvent, type User } from "./models";

export type UsersBloc = Bloc<UsersEvent, Record<string, User>>;

export const UsersContext = createContext<UsersBloc>({
  ...EMPTY,
  state: {},
});
