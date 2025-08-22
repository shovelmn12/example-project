import { type Service } from "./service";

/**
 * The services event type.
 */
export type ServicesEvent =
  | CreateServiceEvent
  | CreatedServiceEvent
  | UpdateServiceEvent
  | UpdatedServiceEvent
  | DeleteServiceEvent
  | DeletedServiceEvent;

/**
 * An event to create a service.
 */
export interface CreateServiceEvent {
  /**
   * The type of the event.
   */
  readonly type: "create";
}

/**
 * An event to indicate that a service has been created.
 */
export interface CreatedServiceEvent {
  /**
   * The type of the event.
   */
  readonly type: "created";
  /**
   * The created service.
   */
  readonly service: Service;
}

/**
 * An event to update a service.
 */
export interface UpdateServiceEvent {
  /**
   * The type of the event.
   */
  readonly type: "update";
  /**
   * The service to update.
   */
  readonly service: Service;
}

/**
 * An event to indicate that a service has been updated.
 */
export interface UpdatedServiceEvent {
  /**
   * The type of the event.
   */
  readonly type: "updated";
  /**
   * The updated service.
   */
  readonly service: Service;
}

/**
 * An event to delete a service.
 */
export interface DeleteServiceEvent {
  /**
   * The type of the event.
   */
  readonly type: "delete";
  /**
   * The ID of the service to delete.
   */
  readonly id: string;
}

/**
 * An event to indicate that a service has been deleted.
 */
export interface DeletedServiceEvent {
  /**
   * The type of the event.
   */
  readonly type: "deleted";
  /**
   * The deleted service.
   */
  readonly service: Service;
}
