import { useStrings } from "@/localizations";
import { type JSX, Select } from "@/theme";
import { useCallback, useMemo } from "@/utils";
import { useEventsBus } from "@/events";

import { useSettingsThemeMode, type ThemeMode } from "..";

/**
 * The theme option.
 */
interface ThemeOption {
  /**
   * The value of the theme option.
   */
  readonly value: ThemeMode;
  /**
   * The name of the theme option.
   */
  readonly name: string;
}

/**
 * The event fired when the theme is changed.
 */
interface ThemeChangedEvent {
  /**
   * The selected theme option.
   */
  readonly option: ThemeOption;
}

/**
 * A component to select the theme mode.
 * @returns The `ThemeSelector` component.
 */
export function ThemeSelector(): JSX.Element {
  const bus = useEventsBus();
  const strings = useStrings();
  const theme = useSettingsThemeMode();
  const options = useMemo<ThemeOption[]>(
    () => [
      { value: "auto", name: strings.theme.auto },
      { value: "light", name: strings.theme.light },
      { value: "dark", name: strings.theme.dark },
    ],
    [strings]
  );
  const value = useMemo<ThemeOption>(
    () => options.find(({ value }) => value === theme) ?? options[0]!,
    [theme, options]
  );
  const onChange = useCallback(
    (event: ThemeChangedEvent) =>
      bus.emit("settings", {
        type: "change.theme.mode",
        mode: event.option.value,
      }),
    [bus]
  );

  return (
    <Select
      value={value}
      options={options}
      labelKey="name"
      onChange={onChange}
    />
  );
}
