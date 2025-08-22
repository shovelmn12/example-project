import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";
import { generateProjectID, randomBool } from "@/utils";

import { type CreateProjectEvent, type Project, type ProjectsState } from "..";

/**
 * The utils for the `onCreate` function.
 */
export interface CreateUtils {
  /**
   * The event bus.
   */
  readonly bus: EventsEmitter;
}

/**
 * Handles the `create` event for the projects BLoC.
 * @param _ The `create` event.
 * @param context The BLoC context.
 * @param utils The utils.
 */
export function onCreate(
  _: CreateProjectEvent,
  { update }: BlocContext<ProjectsState>,
  { bus }: CreateUtils
): void {
  const project: Project = {
    id: generateProjectID(),
    name: "test",
    description: "Some description",
  };

  if (randomBool()) {
    update((state: ProjectsState) => ({
      ...state,
      [project.id]: {
        type: "data",
        value: project,
      },
    }));

    bus.emit("projects", {
      type: "created",
      project: {
        type: "data",
        value: project,
      },
    });
  } else {
    bus.emit("app", {
      type: "error",
      error: {
        source: "projects",
        error: {
          type: "unknown",
          error: "Some unknown error",
        },
      },
    });
  }
}
