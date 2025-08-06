import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";
import { none } from "@/utils";

import { type SettingsState, type ChangeThemeSettingsEvent } from "..";

export interface ChangeThemeUtils {
  readonly bus: EventsEmitter;
}

export function onChangeTheme(
  event: ChangeThemeSettingsEvent,
  { value, update }: BlocContext<SettingsState>,
  { bus }: ChangeThemeUtils
): void {
  try {
    switch (value.type) {
      case "data":
        update({
          type: "data",
          value: {
            theme: event.theme,
          },
        });
        break;

      case "error":
      case "loading":
        if (value.value._tag === "Some") {
          update({
            type: "data",
            value: {
              theme: event.theme,
            },
          });
          bus.emit("settings", { type: "changed.theme", theme: event.theme });
        }
        break;
    }
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
        source: "settings",
        error: {
          type: "unknown",
          error,
        },
      },
    });
  }
}
