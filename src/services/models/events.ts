import { type Service } from "./service";

export type ServicesEvent =
  | CreateServiceEvent
  | CreatedServiceEvent
  | UpdateServiceEvent
  | UpdatedServiceEvent
  | DeleteServiceEvent
  | DeletedServiceEvent;

export interface CreateServiceEvent {
  readonly type: "create";
}

export interface CreatedServiceEvent {
  readonly type: "created";
  readonly service: Service;
}

export interface UpdateServiceEvent {
  readonly type: "update";
  readonly service: Service;
}

export interface UpdatedServiceEvent {
  readonly type: "updated";
  readonly service: Service;
}

export interface DeleteServiceEvent {
  readonly type: "delete";
  readonly service: Service;
}

export interface DeletedServiceEvent {
  readonly type: "deleted";
  readonly service: Service;
}
