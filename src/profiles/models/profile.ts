import { type ProfileName } from ".";

/**
 * The profile model.
 */
export interface Profile {
  /**
   * The ID of the profile.
   */
  readonly id: string;
  /**
   * The name of the profile.
   */
  readonly name: ProfileName;
}
