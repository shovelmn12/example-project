import { createContext, type Option } from "@/utils";
import { EMPTY, type Bloc, type State } from "@/bloc";

import { type AuthError, type AuthEvent } from "./models";

/**
 * The auth state type.
 */
export type AuthState = State<Option<string>, AuthError>;

/**
 * The auth BLoC type.
 */
export type AuthBloc = Bloc<AuthEvent, AuthState>;

/**
 * The auth context.
 */
export const AuthContext = createContext<AuthBloc>({
  ...EMPTY,
  state: { type: "init" },
});
