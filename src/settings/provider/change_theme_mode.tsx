import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";
import { none } from "@/utils";

import { type SettingsState, type ChangeThemeModeSettingsEvent } from "..";

/**
 * The utils for the `onChangeThemeMode` function.
 */
export interface ChangeThemeUtils {
  /**
   * The event bus.
   */
  readonly bus: EventsEmitter;
}

/**
 * Handles the `change.theme.mode` event for the settings BLoC.
 * @param event The `change.theme.mode` event.
 * @param context The BLoC context.
 * @param utils The utils.
 */
export function onChangeThemeMode(
  event: ChangeThemeModeSettingsEvent,
  { value, update }: BlocContext<SettingsState>,
  { bus }: ChangeThemeUtils
): void {
  try {
    switch (value.type) {
      case "data":
        update({
          type: "data",
          value: {
            theme: {
              mode: event.mode,
              type: value.value.theme.type,
            },
          },
        });
        bus.emit("settings", {
          type: "changed.theme",
          theme: {
            mode: event.mode,
            type: value.value.theme.type,
          },
        });
        break;

      case "error":
      case "loading":
        if (value.value._tag === "Some") {
          update({
            type: "data",
            value: {
              theme: {
                mode: event.mode,
                type: value.value.value.theme.type,
              },
            },
          });
          bus.emit("settings", {
            type: "changed.theme",
            theme: {
              mode: event.mode,
              type: value.value.value.theme.type,
            },
          });
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
