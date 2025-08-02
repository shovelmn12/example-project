import { type State } from "@/bloc";

import { type Profile } from "./profile";
import { type ProfilesError } from "./errors";

export type ProfilesEvent =
  | CreateProfileEvent
  | DeleteProfileEvent
  | CreatedProfileEvent
  | DeletedProfileEvent;

export interface CreateProfileEvent {
  readonly type: "create";
}

export interface DeleteProfileEvent {
  readonly type: "delete";
  readonly id: string;
}

export interface CreatedProfileEvent {
  readonly type: "created";
  readonly profile: State<Profile, ProfilesError>;
}

export interface DeletedProfileEvent {
  readonly type: "deleted";
  readonly profile: State<Profile, ProfilesError>;
}
