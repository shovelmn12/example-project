/**
 * The settings data.
 */
export interface SettingsData {
  /**
   * The theme data.
   */
  readonly theme: ThemeData;
}

/**
 * The theme data.
 */
export interface ThemeData {
  /**
   * The theme mode.
   */
  readonly mode: ThemeMode;
  /**
   * The theme type.
   */
  readonly type: ThemeType;
}

/**
 * The theme mode.
 */
export type ThemeMode = "light" | "dark" | "auto";

/**
 * The theme type.
 */
export type ThemeType = "default";
