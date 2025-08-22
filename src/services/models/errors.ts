/**
 * The services error type.
 */
export type ServicesError = UnknownServiceError;

/**
 * An unknown service error.
 */
export interface UnknownServiceError {
  /**
   * The type of the error.
   */
  readonly type: "unknown";
  /**
   * The error.
   */
  readonly error: unknown;
}
