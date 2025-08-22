/**
 * The auth error type.
 */
export type AuthError = UnknownAuthError;

/**
 * An unknown auth error.
 */
export interface UnknownAuthError {
  /**
   * The type of the error.
   */
  readonly type: "unknown";
  /**
   * The error.
   */
  readonly error: unknown;
}
