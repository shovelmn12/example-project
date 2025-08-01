export type AuthError = UnknownAuthError;

export interface UnknownAuthError {
  readonly type: "unknown";
  readonly error: unknown;
}
