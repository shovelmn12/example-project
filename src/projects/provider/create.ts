import { type BlocContext, type DataState } from "@/bloc";
import { type EventsEmitter } from "@/events";
import { generateProjectID, randomBool } from "@/utils";

import { type CreateProjectEvent, type Project, type ProjectsState } from "..";

export interface CreateUtils {
  readonly bus: EventsEmitter;
}

export function onCreate(
  _: CreateProjectEvent,
  { update }: BlocContext<ProjectsState>,
  { bus }: CreateUtils
): void {
  const project: DataState<Project> = {
    type: "data",
    value: {
      id: generateProjectID(),
      name: {
        first: "Test",
        last: "Testing",
      },
    },
  };

  if (randomBool()) {
    update((state: ProjectsState) => ({
      ...state,
      [project.value.id]: project,
    }));

    bus.emit("projects", { type: "created", project });
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
