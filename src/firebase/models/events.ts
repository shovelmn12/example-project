import { type FirebaseOptions } from ".";

/**
 * The Firebase event type.
 */
export type FirebaseEvent = InitFirebaseEvent | InitializedFirebaseEvent;

/**
 * An event to initialize Firebase.
 */
export interface InitFirebaseEvent {
  /**
   * The type of the event.
   */
  readonly type: "init";
  /**
   * The Firebase options.
   */
  readonly config: FirebaseOptions;
}

/**
 * An event to indicate that Firebase has been initialized.
 */
export interface InitializedFirebaseEvent {
  /**
   * The type of the event.
   */
  readonly type: "initialized";
}
