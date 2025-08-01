export type UsersError = UnknownUserError;

export interface UnknownUserError {
  readonly type: "unknown";
  readonly error: unknown;
}
