import { useMemo } from "@/utils";
import {
  useCreateBloc,
  type CreateBlocProps,
  type EventHandlersObject,
} from "@/bloc";
import { type EventsEmitter, useEventsBus } from "@/events";
import { Spinner } from "@/theme";
import { useFirebaseApp, type FirebaseApp } from "@/firebase";

import { type AuthEvent, AuthContext, type AuthState } from "..";

import { onLogin } from "./login";
import { onLogout } from "./logout";

function createHandlers(
  bus: EventsEmitter,
  firebase: FirebaseApp
): EventHandlersObject<AuthEvent, AuthState> {
  return {
    login: (event, context) => onLogin(event, context, { firebase, bus }),
    logout: (event, context) => onLogout(event, context, { firebase, bus }),
  };
}

export function AuthProvider({ children }: React.PropsWithChildren) {
  const option = useFirebaseApp();

  if (option._tag === "None") {
    return <Spinner />;
  }

  return <Provider firebase={option.value}>{children}</Provider>;
}

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
