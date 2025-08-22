/// <reference types="vite/client" />

/**
 * The environment variables.
 */
interface ImportMetaEnv {
  /**
   * The Firebase config.
   */
  readonly VITE_FIREBASE_CONFIG: string;
  /**
   * Whether to log.
   */
  readonly VITE_LOG?: string;
}

/**
 * The import meta object.
 */
interface ImportMeta {
  /**
   * The environment variables.
   */
  readonly env: ImportMetaEnv;
}
