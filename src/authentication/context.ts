import { createContext, type Option } from "@/utils";
import { EMPTY, type Bloc, type State } from "@/bloc";

import { type AuthData, type AuthError, type AuthEvent } from "./models";

export type AuthState = State<Option<AuthData>, AuthError>;

export type AuthBloc = Bloc<AuthEvent, AuthState>;

export const AuthContext = createContext<AuthBloc>({
  ...EMPTY,
  state: { type: "init" },
});
