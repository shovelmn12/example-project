import { type ConfigData } from ".";

/**
 * The config event type.
 */
export type ConfigEvent = InitConfigEvent | InitializedConfigEvent;

/**
 * An event to initialize the config.
 */
export interface InitConfigEvent {
  /**
   * The type of the event.
   */
  readonly type: "init";
}

/**
 * An event to indicate that the config has been initialized.
 */
export interface InitializedConfigEvent {
  /**
   * The type of the event.
   */
  readonly type: "initialized";
  /**
   * The config data.
   */
  readonly config: ConfigData;
}
