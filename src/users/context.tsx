import { createContext } from "@/utils";
import { EMPTY, type Bloc } from "@/bloc";

import { type UsersEvent, type User } from "./models";

export type UsersBloc = Bloc<UsersEvent, Record<string, User>>;

export const UsersContext = createContext<UsersBloc>({
  ...EMPTY,
  state: {},
});
