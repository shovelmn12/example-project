import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";

import { type ProjectsState, type UpdateProjectEvent } from "..";

/**
 * The utils for the `onUpdate` function.
 */
export interface UpdateUtils {
  /**
   * The event bus.
   */
  readonly bus: EventsEmitter;
}

/**
 * Handles the `update` event for the projects BLoC.
 * @param event The `update` event.
 * @param context The BLoC context.
 * @param utils The utils.
 */
export function onUpdate(
  event: UpdateProjectEvent,
  { getState, update }: BlocContext<ProjectsState>,
  { bus }: UpdateUtils
): void {
  const state = getState()[event.project.id];

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
