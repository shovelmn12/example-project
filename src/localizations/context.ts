import { createContext } from "@/utils";
import LocalizedStrings, {
  type LocalizedStrings as LocalizedStringsType,
} from "react-localization";

export type Strings = {
  readonly home: {
    readonly actions: {
      readonly go_to_users: string;
    };
  };
  readonly users: {
    readonly actions: {
      readonly create: string;
    };
  };
};

export type Localization = LocalizedStringsType<Strings>;

export const LocalizationContext = createContext<Localization>(
  new LocalizedStrings<Strings>({
    en: {
      home: {
        actions: {
          go_to_users: "Users",
        },
      },
      users: {
        actions: {
          create: "Create User",
        },
      },
    },
  })
);
