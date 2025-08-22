/**
 * The Firebase error type.
 */
export type FirebaseError = UnknownFirebaseError;

/**
 * An unknown Firebase error.
 */
export interface UnknownFirebaseError {
  /**
   * The type of the error.
   */
  readonly type: "unknown";
  /**
   * The error.
   */
  readonly error: unknown;
}
