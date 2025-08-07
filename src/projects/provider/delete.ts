import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";

import { type DeleteProjectEvent, type ProjectsState } from "..";

export interface DeleteUtils {
  readonly bus: EventsEmitter;
}

export function onDelete(
  event: DeleteProjectEvent,
  { value, update }: BlocContext<ProjectsState>,
  { bus }: DeleteUtils
): void {
  const project = value[event.id];

  update((state: ProjectsState) => {
    const next = {
      ...state,
    };

    delete next[event.id];

    return next;
  });

  bus.emit("projects", { type: "deleted", project });
}
