import { useContext } from "@/utils";

import { type Localization, LocalizationContext } from "./context";
import { type Strings } from "./strings";

/**
 * A hook to get the localizations.
 * @returns The localizations.
 */
export function useLocalizations(): Localization {
  return useContext(LocalizationContext);
}

/**
 * A hook to get the strings.
 * @returns The strings.
 */
export function useStrings(): Strings {
  return useLocalizations();
}
