import { useMemo } from "@/utils";
import {
  useCreateBloc,
  type CreateBlocProps,
  type EventHandlersObject,
} from "@/bloc";
import { type EventsEmitter, useEventsBus } from "@/events";

import { type AuthEvent } from "./models";
import { AuthContext, type AuthState } from "./context";

function createHandlers(
  bus: EventsEmitter
): EventHandlersObject<AuthEvent, AuthState> {
  return {};
}

export function AuthProvider({ children }: React.PropsWithChildren) {
  const bus = useEventsBus();
  const bloc = useCreateBloc(
    useMemo<CreateBlocProps<AuthEvent, AuthState>>(
      () => ({ initialState: { type: "init" }, handlers: createHandlers(bus) }),
      [bus]
    )
  );

  return <AuthContext.Provider value={bloc}>{children}</AuthContext.Provider>;
}
