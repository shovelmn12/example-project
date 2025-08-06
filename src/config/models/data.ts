import { type FirebaseOptions } from "@/firebase";

export interface ConfigData {
  readonly env: EnvData;
}

export interface EnvData {
  readonly firebase: FirebaseOptions;
}
