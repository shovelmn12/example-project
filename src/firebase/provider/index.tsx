import { useMemo } from "@/utils";
import {
  useCreateBloc,
  type CreateBlocProps,
  type EventHandlersObject,
} from "@/bloc";
import { type EventsEmitter, useEventsBus } from "@/events";

import { FirebaseContext, type FirebaseEvent, type FirebaseState } from "..";

import { onInit } from "./init";

function createHandlers(
  bus: EventsEmitter
): EventHandlersObject<FirebaseEvent, FirebaseState> {
  return {
    init: (event, context) => onInit(event, context, { bus }),
    initialized: () => {},
  };
}

export function FirebaseProvider({ children }: React.PropsWithChildren) {
  const bus = useEventsBus();
  const bloc = useCreateBloc(
    useMemo<CreateBlocProps<FirebaseEvent, FirebaseState>>(
      () => ({
        initialState: { type: "not-initialized" },
        handlers: createHandlers(bus),
      }),
      [bus]
    )
  );

  return (
    <FirebaseContext.Provider value={bloc}>{children}</FirebaseContext.Provider>
  );
}
