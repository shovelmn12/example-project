import type { AppError } from "./errors";

export type AppEvent = InitAppEvent | AppErrorEvent;

export interface InitAppEvent {
  readonly type: "init";
}

export interface AppErrorEvent {
  readonly type: "error";
  readonly error: AppError;
}
