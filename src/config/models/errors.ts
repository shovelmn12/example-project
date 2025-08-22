/**
 * The config error type.
 */
export type ConfigError = UnknownConfigError;

/**
 * An unknown config error.
 */
export interface UnknownConfigError {
  /**
   * The type of the error.
   */
  readonly type: "unknown";
  /**
   * The error.
   */
  readonly error: unknown;
}
