import { type State } from "@/bloc";

import { type Project, type ProjectsError } from ".";

export type ProjectsEvent =
  | CreateProjectEvent
  | CreatedProjectEvent
  | DeleteProjectEvent
  | DeletedProjectEvent
  | UpdateProjectEvent
  | UpdatedProjectEvent;

export interface CreateProjectEvent {
  readonly type: "create";
}

export interface DeleteProjectEvent {
  readonly type: "delete";
  readonly id: string;
}

export interface CreatedProjectEvent {
  readonly type: "created";
  readonly project: State<Project, ProjectsError>;
}

export interface DeletedProjectEvent {
  readonly type: "deleted";
  readonly project: State<Project, ProjectsError>;
}

export interface UpdateProjectEvent {
  readonly type: "update";
  readonly project: Project;
}

export interface UpdatedProjectEvent {
  readonly type: "updated";
  readonly project: Project;
}
