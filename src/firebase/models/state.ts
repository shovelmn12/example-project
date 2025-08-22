import { type FirebaseApp } from "firebase/app";

export { type FirebaseApp, type FirebaseOptions } from "firebase/app";

/**
 * The Firebase state type.
 */
export type FirebaseState =
  | NotInitializedFirebaseState
  | LoadingFirebaseState
  | InitializedFirebaseState
  | ErrorFirebaseState;

/**
 * The state when Firebase is not initialized.
 */
export interface NotInitializedFirebaseState {
  /**
   * The type of the state.
   */
  readonly type: "not-initialized";
}

/**
 * The state when Firebase is loading.
 */
export interface LoadingFirebaseState {
  /**
   * The type of the state.
   */
  readonly type: "loading";
}

/**
 * The state when Firebase is initialized.
 */
export interface InitializedFirebaseState {
  /**
   * The type of the state.
   */
  readonly type: "initialized";
  /**
   * The Firebase app.
   */
  readonly app: FirebaseApp;
}

/**
 * The state when there is an error with Firebase.
 */
export interface ErrorFirebaseState {
  /**
   * The type of the state.
   */
  readonly type: "error";
  /**
   * The error.
   */
  readonly error: unknown;
}
