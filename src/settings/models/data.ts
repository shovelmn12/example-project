export interface SettingsData {
  readonly theme: ThemeData;
}

export interface ThemeData {
  readonly mode: ThemeMode;
  readonly type: ThemeType;
}

export type ThemeMode = "light" | "dark" | "auto";

export type ThemeType = "default";
