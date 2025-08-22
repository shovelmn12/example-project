import { type ThemeData, type ThemeMode } from ".";

/**
 * The settings event type.
 */
export type SettingsEvent =
  | InitSettingsEvent
  | InitializedSettingsEvent
  | ChangeThemeModeSettingsEvent
  | ChangedThemeSettingsEvent;

/**
 * An event to initialize the settings.
 */
export interface InitSettingsEvent {
  /**
   * The type of the event.
   */
  readonly type: "init";
}

/**
 * An event to indicate that the settings have been initialized.
 */
export interface InitializedSettingsEvent {
  /**
   * The type of the event.
   */
  readonly type: "initialized";
}

/**
 * An event to change the theme mode.
 */
export interface ChangeThemeModeSettingsEvent {
  /**
   * The type of the event.
   */
  readonly type: "change.theme.mode";
  /**
   * The theme mode.
   */
  readonly mode: ThemeMode;
}

/**
 * An event to indicate that the theme has been changed.
 */
export interface ChangedThemeSettingsEvent {
  /**
   * The type of the event.
   */
  readonly type: "changed.theme";
  /**
   * The theme data.
   */
  readonly theme: ThemeData;
}
