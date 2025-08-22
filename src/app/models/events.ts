import type { AppError } from "./errors";

/**
 * The app event type.
 */
export type AppEvent = PreInitAppEvent | InitAppEvent | AppErrorEvent;

/**
 * An event to indicate that the app is pre-initializing.
 */
export interface PreInitAppEvent {
  /**
   * The type of the event.
   */
  readonly type: "pre-init";
}

/**
 * An event to indicate that the app is initializing.
 */
export interface InitAppEvent {
  /**
   * The type of the event.
   */
  readonly type: "init";
}

/**
 * An event to indicate that an error has occurred.
 */
export interface AppErrorEvent {
  /**
   * The type of the event.
   */
  readonly type: "error";
  /**
   * The error.
   */
  readonly error: AppError;
}
