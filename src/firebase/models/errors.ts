export type FirebaseError = UnknownFirebaseError;

export interface UnknownFirebaseError {
  readonly type: "unknown";
  readonly error: unknown;
}
