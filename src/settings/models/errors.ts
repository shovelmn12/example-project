/**
 * The settings error type.
 */
export type SettingsError = UnknownSettingsError;

/**
 * An unknown settings error.
 */
export interface UnknownSettingsError {
  /**
   * The type of the error.
   */
  readonly type: "unknown";
  /**
   * The error.
   */
  readonly error: unknown;
}
