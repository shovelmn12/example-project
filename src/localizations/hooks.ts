import { useContext } from "@/utils";

import {
  type Localization,
  LocalizationContext,
  type Strings,
} from "./context";

export function useLocalizations(): Localization {
  return useContext(LocalizationContext);
}

export function useStrings(): Strings {
  return useLocalizations();
}
