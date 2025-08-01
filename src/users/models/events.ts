import { type State } from "@/bloc";

import { type User } from "./user";
import { type UsersError } from "./errors";

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
  readonly user: State<User, UsersError>;
}

export interface DeletedUserEvent {
  readonly type: "deleted";
  readonly user: State<User, UsersError>;
}
