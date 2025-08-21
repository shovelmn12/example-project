import { type FirebaseOptions } from "@/firebase";

export interface ConfigData {
  readonly env: EnvData;
  readonly log: boolean;
}

export interface EnvData {
  readonly firebase: FirebaseOptions;
}
