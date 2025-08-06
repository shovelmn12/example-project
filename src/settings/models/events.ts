import { type ThemeData, type ThemeMode } from ".";

export type SettingsEvent =
  | InitSettingsEvent
  | InitializedSettingsEvent
  | ChangeThemeModeSettingsEvent
  | ChangedThemeSettingsEvent;

export interface InitSettingsEvent {
  readonly type: "init";
}

export interface InitializedSettingsEvent {
  readonly type: "initialized";
}

export interface InitializedSettingsEvent {
  readonly type: "initialized";
}

export interface ChangeThemeModeSettingsEvent {
  readonly type: "change.theme.mode";
  readonly mode: ThemeMode;
}

export interface ChangedThemeSettingsEvent {
  readonly type: "changed.theme";
  readonly theme: ThemeData;
}
