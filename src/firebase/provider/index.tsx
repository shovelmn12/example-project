import { noOp, useMemo } from "@/utils";
import {
  useCreateBloc,
  type CreateBlocProps,
  type EventHandlersObject,
} from "@/bloc";
import { type EventsEmitter, useEventsBus } from "@/events";

import { FirebaseContext, type FirebaseEvent, type FirebaseState } from "..";

import { onInit } from "./init";

/**
 * Creates the event handlers for the Firebase BLoC.
 * @param bus The event bus.
 * @returns The event handlers.
 */
function createHandlers(
  bus: EventsEmitter
): EventHandlersObject<FirebaseEvent, FirebaseState> {
  return {
    init: (event, context) => onInit(event, context, { bus }),
    initialized: noOp,
  };
}

/**
 * A provider for the Firebase BLoC.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @returns The Firebase provider.
 */
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
