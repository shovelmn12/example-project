import { useMemo } from "@/utils";
import {
  useCreateBloc,
  type CreateBlocProps,
  type EventHandlersObject,
} from "@/bloc";
import { type EventsEmitter, useEventsBus } from "@/events";

import { type UsersEvent, UsersContext, type UsersState } from "..";

import { onCreate } from "./create";
import { onDelete } from "./delete";

function createHandlers(
  bus: EventsEmitter
): EventHandlersObject<UsersEvent, UsersState> {
  return {
    create: (event, context) => onCreate(event, context, { bus }),
    delete: (event, context) => onDelete(event, context, { bus }),
    created: () => {},
    deleted: () => {},
  };
}

export function UsersProvider({ children }: React.PropsWithChildren) {
  const bus = useEventsBus();
  const bloc = useCreateBloc(
    useMemo<CreateBlocProps<UsersEvent, UsersState>>(
      () => ({ initialState: {}, handlers: createHandlers(bus) }),
      [bus]
    )
  );

  return <UsersContext.Provider value={bloc}>{children}</UsersContext.Provider>;
}
