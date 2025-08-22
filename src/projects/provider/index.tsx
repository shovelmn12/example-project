import { type JSX } from "@/theme";
import { noOp, useMemo } from "@/utils";
import {
  useCreateBloc,
  type CreateBlocProps,
  type EventHandlersObject,
} from "@/bloc";
import { type EventsEmitter, useEventsBus } from "@/events";

import { type ProjectsEvent, ProjectsContext, type ProjectsState } from "..";

import { onCreate } from "./create";
import { onDelete } from "./delete";
import { onUpdate } from "./update";

/**
 * Creates the event handlers for the projects BLoC.
 * @param bus The event bus.
 * @returns The event handlers.
 */
function createHandlers(
  bus: EventsEmitter
): EventHandlersObject<ProjectsEvent, ProjectsState> {
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
 * A provider for the projects BLoC.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @returns The projects provider.
 */
export function ProjectsProvider({
  children,
}: React.PropsWithChildren): JSX.Element {
  const bus = useEventsBus();
  const bloc = useCreateBloc(
    useMemo<CreateBlocProps<ProjectsEvent, ProjectsState>>(
      () => ({ initialState: {}, handlers: createHandlers(bus) }),
      [bus]
    )
  );

  return (
    <ProjectsContext.Provider value={bloc}>{children}</ProjectsContext.Provider>
  );
}
