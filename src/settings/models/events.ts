import { type ThemeType } from ".";

export type SettingsEvent =
  | InitSettingsEvent
  | InitializedSettingsEvent
  | ChangeThemeSettingsEvent
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

export interface ChangeThemeSettingsEvent {
  readonly type: "change.theme";
  readonly theme: ThemeType;
}

export interface ChangedThemeSettingsEvent {
  readonly type: "changed.theme";
  readonly theme: ThemeType;
}
