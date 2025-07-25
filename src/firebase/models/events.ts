export type FirebaseEvent =
  | InitFirebaseEvent
  | InitializedFirebaseEvent
  | ErrorFirebaseEvent;

export interface InitFirebaseEvent {
  readonly type: "init";
}

export interface InitializedFirebaseEvent {
  readonly type: "initialized";
}

export interface ErrorFirebaseEvent {
  readonly type: "error";
  readonly error: unknown;
}
