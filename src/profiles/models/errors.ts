/**
 * The profiles error type.
 */
export type ProfilesError = UnknownProfileError;

/**
 * An unknown profile error.
 */
export interface UnknownProfileError {
  /**
   * The type of the error.
   */
  readonly type: "unknown";
  /**
   * The error.
   */
  readonly error: unknown;
}
