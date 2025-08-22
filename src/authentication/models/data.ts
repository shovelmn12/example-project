import type { Option } from "@/utils";

/**
 * The auth data.
 */
export interface AuthData {
  /**
   * The function to unsubscribe from the auth state changes.
   */
  readonly unsubscribe: () => void;
  /**
   * The auth token.
   */
  readonly token: Option<string>;
}
