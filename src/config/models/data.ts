import { type FirebaseOptions } from "@/firebase";

/**
 * The config data.
 */
export interface ConfigData {
  /**
   * The environment data.
   */
  readonly env: EnvData;
  /**
   * Whether to log.
   */
  readonly log: boolean;
}

/**
 * The environment data.
 */
export interface EnvData {
  /**
   * The Firebase options.
   */
  readonly firebase: FirebaseOptions;
  /**
   * The base URL for the API.
   * This is an environment variable set in the Vite configuration.
   */
  readonly api_url: string;
}
