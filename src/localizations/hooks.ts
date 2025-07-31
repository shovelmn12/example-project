import { useContext } from "@/utils";
import { type Localization, LocalizationContext } from "./context";

export function useLocalizations(): Localization {
  return useContext(LocalizationContext);
}
