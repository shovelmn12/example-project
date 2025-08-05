import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";

import { type ProjectsState, type UpdateProjectEvent } from "..";

export interface UpdateUtils {
  readonly bus: EventsEmitter;
}

export function onUpdate(
  event: UpdateProjectEvent,
  { value, update }: BlocContext<ProjectsState>,
  { bus }: UpdateUtils
): void {
  const state = value[event.project.id];

  if (state.type === "init") {
    return;
  } else if (state.type === "data") {
    const next = {
      ...state.value,
      ...event.project,
    };

    update((state) => ({
      ...state,
      [next.id]: {
        type: "data",
        value: next,
      },
    }));

    bus.emit("projects", { type: "updated", project: next });
  } else if (state.value._tag === "Some") {
    const next = {
      ...state.value.value,
      ...event.project,
    };

    update((state) => ({
      ...state,
      [next.id]: {
        type: "data",
        value: next,
      },
    }));

    bus.emit("projects", { type: "updated", project: next });
  }
}
