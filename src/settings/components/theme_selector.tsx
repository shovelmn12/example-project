import { useStrings } from "@/localizations";
import { type JSX, Select } from "@/theme";
import { useCallback, useMemo } from "@/utils";
import { useEventsBus } from "@/events";

import { type ThemeType } from "..";

interface ThemeOption {
  readonly value: ThemeType;
  readonly name: string;
}

interface ThemeChangedEvent {
  readonly option: ThemeOption;
}

export function ThemeSelector(): JSX.Element {
  const bus = useEventsBus();
  const strings = useStrings();
  const options = useMemo<ThemeOption[]>(
    () => [
      { value: "light", name: strings.theme.light },
      { value: "dark", name: strings.theme.dark },
    ],
    [strings]
  );
  const onChange = useCallback(
    (event: ThemeChangedEvent) =>
      bus.emit("settings", { type: "change.theme", theme: event.option.value }),
    [bus]
  );

  return <Select options={options} labelKey="name" onChange={onChange} />;
}
