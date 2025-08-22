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
