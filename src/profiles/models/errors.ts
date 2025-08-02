export type ProfilesError = UnknownProfileError;

export interface UnknownProfileError {
  readonly type: "unknown";
  readonly error: unknown;
}
