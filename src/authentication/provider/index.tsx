import { type JSX } from "@/theme";
import { useMemo } from "@/utils";
import {
  useCreateBloc,
  type CreateBlocProps,
  type EventHandlersObject,
} from "@/bloc";
import { type EventsEmitter, useEventsBus } from "@/events";
import { useFirebaseApp, type FirebaseApp } from "@/firebase";

import { type AuthEvent, AuthContext, type AuthState } from "..";

import { onLogin } from "./login";
import { onLogout } from "./logout";
import { onLoggedIn } from "./logged_in";
import { onLoggedOut } from "./logged_out";

/**
 * Creates the event handlers for the auth BLoC.
 * @param bus The event bus.
 * @param firebase The Firebase app.
 * @returns The event handlers.
 */
function createHandlers(
  bus: EventsEmitter,
  firebase: FirebaseApp
): EventHandlersObject<AuthEvent, AuthState> {
  return {
    login: (event, context) => onLogin(event, context, { firebase, bus }),
    logout: (event, context) => onLogout(event, context, { firebase, bus }),
    logged_in: (event, context) => onLoggedIn(event, context, { bus }),
    logged_out: (event, context) => onLoggedOut(event, context, { bus }),
  };
}

/**
 * A provider for the auth BLoC.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @returns The auth provider.
 */
export function AuthProvider({
  children,
}: React.PropsWithChildren): JSX.Element {
  const option = useFirebaseApp();

  if (option._tag === "None") {
    return <>{children}</>;
  }

  return (
    <Provider key="auth" firebase={option.value}>
      {children}
    </Provider>
  );
}

/**
 * The internal provider for the auth BLoC.
 * @param props The props for the component.
 * @param props.firebase The Firebase app.
 * @param props.children The children to render.
 * @returns The auth provider.
 */
function Provider({
  firebase,
  children,
}: React.PropsWithChildren<{ firebase: FirebaseApp }>) {
  const bus = useEventsBus();
  const bloc = useCreateBloc(
    useMemo<CreateBlocProps<AuthEvent, AuthState>>(
      () => ({
        initialState: { type: "init" },
        handlers: createHandlers(bus, firebase),
      }),
      [bus, firebase]
    )
  );

  return <AuthContext.Provider value={bloc}>{children}</AuthContext.Provider>;
}
