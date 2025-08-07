export type ConfigError = UnknownConfigError;

export interface UnknownConfigError {
  readonly type: "unknown";
  readonly error: unknown;
}
