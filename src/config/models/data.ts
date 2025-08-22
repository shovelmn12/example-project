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
}
