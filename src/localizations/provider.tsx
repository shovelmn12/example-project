import { type JSX } from "@/theme";

import { LocalizationContext, type Localization } from "./context";

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
