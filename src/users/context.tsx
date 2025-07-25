import { type UsersEvent, type User } from "@/users";
import { createContext, EMPTY, type Bloc } from "@/utils";

export type UsersBloc = Bloc<UsersEvent, Record<string, User>>;

export const UsersContext = createContext<UsersBloc>(EMPTY);
