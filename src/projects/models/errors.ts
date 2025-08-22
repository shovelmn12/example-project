/**
 * The projects error type.
 */
export type ProjectsError = UnknownProjectError;

/**
 * An unknown project error.
 */
export interface UnknownProjectError {
  /**
   * The type of the error.
   */
  readonly type: "unknown";
  /**
   * The error.
   */
  readonly error: unknown;
}
