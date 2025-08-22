import { noOp, useMemo } from "@/utils";
import {
  useCreateBloc,
  type CreateBlocProps,
  type EventHandlersObject,
} from "@/bloc";
import { type EventsEmitter, useEventsBus } from "@/events";

import { SettingsContext, type SettingsEvent, type SettingsState } from "..";

import { onInit } from "./init";
import { onChangeThemeMode } from "./change_theme_mode";

/**
 * Creates the event handlers for the settings BLoC.
 * @param bus The event bus.
 * @returns The event handlers.
 */
function createHandlers(
  bus: EventsEmitter
): EventHandlersObject<SettingsEvent, SettingsState> {
  return {
    init: (event, context) => onInit(event, context, { bus }),
    "change.theme.mode": (event, context) =>
      onChangeThemeMode(event, context, { bus }),
    initialized: noOp,
    "changed.theme": noOp,
  };
}

/**
 * A provider for the settings BLoC.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @returns The settings provider.
 */
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
