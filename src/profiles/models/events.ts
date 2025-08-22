import { type State } from "@/bloc";

import { type Profile, type ProfilesError } from ".";

/**
 * The profiles event type.
 */
export type ProfilesEvent =
  | CreateProfileEvent
  | CreatedProfileEvent
  | DeleteProfileEvent
  | DeletedProfileEvent
  | UpdateProfileEvent
  | UpdatedProfileEvent;

/**
 * An event to create a profile.
 */
export interface CreateProfileEvent {
  /**
   * The type of the event.
   */
  readonly type: "create";
}

/**
 * An event to delete a profile.
 */
export interface DeleteProfileEvent {
  /**
   * The type of the event.
   */
  readonly type: "delete";
  /**
   * The ID of the profile to delete.
   */
  readonly id: string;
}

/**
 * An event to indicate that a profile has been created.
 */
export interface CreatedProfileEvent {
  /**
   * The type of the event.
   */
  readonly type: "created";
  /**
   * The created profile.
   */
  readonly profile: State<Profile, ProfilesError>;
}

/**
 * An event to indicate that a profile has been deleted.
 */
export interface DeletedProfileEvent {
  /**
   * The type of the event.
   */
  readonly type: "deleted";
  /**
   * The deleted profile.
   */
  readonly profile: State<Profile, ProfilesError>;
}

/**
 * An event to update a profile.
 */
export interface UpdateProfileEvent {
  /**
   * The type of the event.
   */
  readonly type: "update";
  /**
   * The profile to update.
   */
  readonly profile: Profile;
}

/**
 * An event to indicate that a profile has been updated.
 */
export interface UpdatedProfileEvent {
  /**
   * The type of the event.
   */
  readonly type: "updated";
  /**
   * The updated profile.
   */
  readonly profile: Profile;
}
