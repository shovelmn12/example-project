import type { Option } from "@/utils";

export interface AuthData {
  readonly unsubscribe: () => void;
  readonly token: Option<string>;
}
