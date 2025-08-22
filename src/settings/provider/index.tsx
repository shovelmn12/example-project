import { type JSX } from "@/theme";
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

export function SettingsProvider({
  children,
}: React.PropsWithChildren): JSX.Element {
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
