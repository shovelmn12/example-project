import { type JSX } from "@/theme";
import { noOp, useMemo } from "@/utils";
import {
  useCreateBloc,
  type CreateBlocProps,
  type EventHandlersObject,
} from "@/bloc";
import { type EventsEmitter, useEventsBus } from "@/events";

import { ConfigContext, type ConfigEvent, type ConfigState } from "..";

import { onInit } from "./init";

function createHandlers(
  bus: EventsEmitter
): EventHandlersObject<ConfigEvent, ConfigState> {
  return {
    init: (event, context) => onInit(event, context, { bus }),
    initialized: noOp,
  };
}

export function ConfigProvider({
  children,
}: React.PropsWithChildren): JSX.Element {
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
