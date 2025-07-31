import LocalizedStrings, {
  type LocalizedStrings as LocalizedStringsType,
} from "react-localization";

import { createContext } from "@/utils";

import { type Strings, default as strings } from "./strings";

export type Localization = LocalizedStringsType<Strings>;

export const LocalizationContext = createContext<Localization>(
  new LocalizedStrings<Strings>(strings)
);
