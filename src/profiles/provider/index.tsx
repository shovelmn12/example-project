import { noOp, useMemo } from "@/utils";
import {
  useCreateBloc,
  type CreateBlocProps,
  type EventHandlersObject,
} from "@/bloc";
import { type EventsEmitter, useEventsBus } from "@/events";

import { type ProfilesEvent, ProfilesContext, type ProfilesState } from "..";

import { onCreate } from "./create";
import { onDelete } from "./delete";
import { onUpdate } from "./update";

/**
 * Creates the event handlers for the profiles BLoC.
 * @param bus The event bus.
 * @returns The event handlers.
 */
function createHandlers(
  bus: EventsEmitter
): EventHandlersObject<ProfilesEvent, ProfilesState> {
  return {
    create: (event, context) => onCreate(event, context, { bus }),
    delete: (event, context) => onDelete(event, context, { bus }),
    update: (event, context) => onUpdate(event, context, { bus }),
    created: noOp,
    deleted: noOp,
    updated: noOp,
  };
}

/**
 * A provider for the profiles BLoC.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @returns The profiles provider.
 */
export function ProfilesProvider({ children }: React.PropsWithChildren) {
  const bus = useEventsBus();
  const bloc = useCreateBloc(
    useMemo<CreateBlocProps<ProfilesEvent, ProfilesState>>(
      () => ({ initialState: {}, handlers: createHandlers(bus) }),
      [bus]
    )
  );

  return (
    <ProfilesContext.Provider value={bloc}>{children}</ProfilesContext.Provider>
  );
}
