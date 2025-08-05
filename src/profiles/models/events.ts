import { type State } from "@/bloc";

import { type Profile, type ProfilesError } from ".";

export type ProfilesEvent =
  | CreateProfileEvent
  | CreatedProfileEvent
  | DeleteProfileEvent
  | DeletedProfileEvent
  | UpdateProfileEvent
  | UpdatedProfileEvent;

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

export interface UpdateProfileEvent {
  readonly type: "update";
  readonly profile: Profile;
}

export interface UpdatedProfileEvent {
  readonly type: "updated";
  readonly profile: Profile;
}
