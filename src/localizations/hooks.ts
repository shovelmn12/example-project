import { useContext } from "@/utils";

import { type Localization, LocalizationContext } from "./context";
import { type Strings } from "./strings";

export function useLocalizations(): Localization {
  return useContext(LocalizationContext);
}

export function useStrings(): Strings {
  return useLocalizations();
}
