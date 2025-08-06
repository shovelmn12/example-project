export type FirebaseEvent = InitFirebaseEvent | InitializedFirebaseEvent;

export interface InitFirebaseEvent {
  readonly type: "init";
}

export interface InitializedFirebaseEvent {
  readonly type: "initialized";
}
