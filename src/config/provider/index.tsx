import { noOp, useMemo } from "@/utils";
import {
  useCreateBloc,
  type CreateBlocProps,
  type EventHandlersObject,
} from "@/bloc";
import { type EventsEmitter, useEventsBus } from "@/events";

import { ConfigContext, type ConfigEvent, type ConfigState } from "..";

import { onInit } from "./init";

/**
 * Creates the event handlers for the config BLoC.
 * @param bus The event bus.
 * @returns The event handlers.
 */
function createHandlers(
  bus: EventsEmitter
): EventHandlersObject<ConfigEvent, ConfigState> {
  return {
    init: (event, context) => onInit(event, context, { bus }),
    initialized: noOp,
  };
}

/**
 * A provider for the config BLoC.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @returns The config provider.
 */
export function ConfigProvider({ children }: React.PropsWithChildren) {
  const bus = useEventsBus();
  const bloc = useCreateBloc(
    useMemo<CreateBlocProps<ConfigEvent, ConfigState>>(
      () => ({
        initialState: { type: "init" },
        handlers: createHandlers(bus),
      }),
      [bus]
    )
  );

  return (
    <ConfigContext.Provider value={bloc}>{children}</ConfigContext.Provider>
  );
}
