import { type State } from "@/bloc";

import { type Project, type ProjectsError } from ".";

/**
 * The projects event type.
 */
export type ProjectsEvent =
  | CreateProjectEvent
  | CreatedProjectEvent
  | DeleteProjectEvent
  | DeletedProjectEvent
  | UpdateProjectEvent
  | UpdatedProjectEvent;

/**
 * An event to create a project.
 */
export interface CreateProjectEvent {
  /**
   * The type of the event.
   */
  readonly type: "create";
}

/**
 * An event to delete a project.
 */
export interface DeleteProjectEvent {
  /**
   * The type of the event.
   */
  readonly type: "delete";
  /**
   * The ID of the project to delete.
   */
  readonly id: string;
}

/**
 * An event to indicate that a project has been created.
 */
export interface CreatedProjectEvent {
  /**
   * The type of the event.
   */
  readonly type: "created";
  /**
   * The created project.
   */
  readonly project: State<Project, ProjectsError>;
}

/**
 * An event to indicate that a project has been deleted.
 */
export interface DeletedProjectEvent {
  /**
   * The type of the event.
   */
  readonly type: "deleted";
  /**
   * The deleted project.
   */
  readonly project: State<Project, ProjectsError>;
}

/**
 * An event to update a project.
 */
export interface UpdateProjectEvent {
  /**
   * The type of the event.
   */
  readonly type: "update";
  /**
   * The project to update.
   */
  readonly project: Project;
}

/**
 * An event to indicate that a project has been updated.
 */
export interface UpdatedProjectEvent {
  /**
   * The type of the event.
   */
  readonly type: "updated";
  /**
   * The updated project.
   */
  readonly project: Project;
}
