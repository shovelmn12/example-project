import type { AppError } from "./errors";

export type AppEvent = PreInitAppEvent | InitAppEvent | AppErrorEvent;

export interface PreInitAppEvent {
  readonly type: "pre-init";
}

export interface InitAppEvent {
  readonly type: "init";
}

export interface AppErrorEvent {
  readonly type: "error";
  readonly error: AppError;
}
