import { type FirebaseOptions } from ".";

export type FirebaseEvent = InitFirebaseEvent | InitializedFirebaseEvent;

export interface InitFirebaseEvent {
  readonly type: "init";
  readonly config: FirebaseOptions;
}

export interface InitializedFirebaseEvent {
  readonly type: "initialized";
}
