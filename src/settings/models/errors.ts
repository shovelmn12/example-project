export type SettingsError = UnknownSettingsError;

export interface UnknownSettingsError {
  readonly type: "unknown";
  readonly error: unknown;
}
