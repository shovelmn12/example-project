import { type Profile } from "../..";

export type ProfileEvent = UpdateProfileEvent | UpdatedProfileEvent;

export interface UpdateProfileEvent {
  readonly type: "update";
  readonly profile: Omit<Profile, "id">;
}

export interface UpdatedProfileEvent {
  readonly type: "updated";
  readonly profile: Profile;
}
