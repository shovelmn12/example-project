export type ProjectsError = UnknownProjectError;

export interface UnknownProjectError {
  readonly type: "unknown";
  readonly error: unknown;
}
