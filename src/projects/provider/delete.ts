import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";

import { type DeleteProjectEvent, type ProjectsState } from "..";

/**
 * The utils for the `onDelete` function.
 */
export interface DeleteUtils {
  /**
   * The event bus.
   */
  readonly bus: EventsEmitter;
}

/**
 * Handles the `delete` event for the projects BLoC.
 * @param event The `delete` event.
 * @param context The BLoC context.
 * @param utils The utils.
 */
export function onDelete(
  event: DeleteProjectEvent,
  { getState, update }: BlocContext<ProjectsState>,
  { bus }: DeleteUtils
): void {
  const project = getState()[event.id];

  update((state: ProjectsState) => {
    const next = {
      ...state,
    };

    delete next[event.id];

    return next;
  });

  bus.emit("projects", { type: "deleted", project });
}
