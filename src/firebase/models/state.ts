import type { FirebaseApp } from "firebase/app";

export type FirebaseState =
  | NotInitializedFirebaseState
  | LoadingFirebaseState
  | InitializedFirebaseState
  | ErrorFirebaseState;

export interface NotInitializedFirebaseState {
  readonly type: "not-initialized";
}

export interface LoadingFirebaseState {
  readonly type: "loading";
}

export interface InitializedFirebaseState {
  readonly type: "initialized";
  readonly app: FirebaseApp;
}

export interface ErrorFirebaseState {
  readonly type: "error";
  readonly error: unknown;
}
