import { type JSX } from "@/theme";

import { LocalizationContext, type Localization } from "./context";

/**
 * A provider for the localizations.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @param props.value The localizations to provide.
 * @returns The localization provider.
 */
export function LocalizationProvider({
  children,
  value,
}: React.PropsWithChildren<{ value: Localization }>): JSX.Element {
  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
}
