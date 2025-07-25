import type { User } from "./user";

export type UsersEvent =
  | CreateUserEvent
  | DeleteUserEvent
  | CreatedUserEvent
  | DeletedUserEvent;

export interface CreateUserEvent {
  readonly type: "create";
}

export interface DeleteUserEvent {
  readonly type: "delete";
  readonly id: string;
}

export interface CreatedUserEvent {
  readonly type: "created";
  readonly user: User;
}

export interface DeletedUserEvent {
  readonly type: "deleted";
  readonly user: User;
}
