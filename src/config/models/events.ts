import { type ConfigData } from ".";

export type ConfigEvent = InitConfigEvent | InitializedConfigEvent;

export interface InitConfigEvent {
  readonly type: "init";
}

export interface InitializedConfigEvent {
  readonly type: "initialized";
}

export interface InitializedConfigEvent {
  readonly type: "initialized";
  readonly config: ConfigData;
}
