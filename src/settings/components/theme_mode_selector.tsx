import { useStrings } from "@/localizations";
import { type JSX, Select } from "@/theme";
import { useCallback, useMemo } from "@/utils";
import { useEventsBus } from "@/events";

import { useSettingsThemeMode, type ThemeMode } from "..";

interface ThemeOption {
  readonly value: ThemeMode;
  readonly name: string;
}

interface ThemeChangedEvent {
  readonly option: ThemeOption;
}

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
