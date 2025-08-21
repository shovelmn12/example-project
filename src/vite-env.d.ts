/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FIREBASE_CONFIG: string;
  readonly VITE_LOG?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
