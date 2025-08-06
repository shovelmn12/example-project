import { useMemo } from "@/utils";
import {
  useCreateBloc,
  type CreateBlocProps,
  type EventHandlersObject,
} from "@/bloc";
import { type EventsEmitter, useEventsBus } from "@/events";

import { SettingsContext, type SettingsEvent, type SettingsState } from "..";

import { onInit } from "./init";

function createHandlers(
  bus: EventsEmitter
): EventHandlersObject<SettingsEvent, SettingsState> {
  return {
    init: (event, context) => onInit(event, context, { bus }),
    initialized: () => {},
  };
}

export function SettingsProvider({ children }: React.PropsWithChildren) {
  const bus = useEventsBus();
  const bloc = useCreateBloc(
    useMemo<CreateBlocProps<SettingsEvent, SettingsState>>(
      () => ({
        initialState: { type: "init" },
        handlers: createHandlers(bus),
      }),
      [bus]
    )
  );

  return (
    <SettingsContext.Provider value={bloc}>{children}</SettingsContext.Provider>
  );
}
