import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";

import { type ConfigState, type InitConfigEvent } from "..";
import { none, parseBoolean } from "@/utils";

export interface InitUtils {
  readonly bus: EventsEmitter;
}

export function onInit(
  _: InitConfigEvent,
  { update }: BlocContext<ConfigState>,
  { bus }: InitUtils
): void {
  try {
    const config = {
      env: {
        firebase: JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG),
      },
      log: parseBoolean(import.meta.env.VITE_LOG, import.meta.env.DEV),
    };

    update({
      type: "data",
      value: config,
    });

    bus.emit("config", { type: "initialized", config });
  } catch (error) {
    update({
      type: "error",
      value: none,
      error: {
        type: "unknown",
        error,
      },
    });

    bus.emit("app", {
      type: "error",
      error: {
        source: "config",
        error: {
          type: "unknown",
          error,
        },
      },
    });
  }
}
