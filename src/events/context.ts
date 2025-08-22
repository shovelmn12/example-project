import { type AppEvent } from "@/app";
import { type AuthEvent } from "@/authentication";
import type { ConfigEvent } from "@/config";
import { type FirebaseEvent } from "@/firebase";
import { type ProfilesEvent } from "@/profiles";
import { type ProjectsEvent } from "@/projects";
import { type ServicesEvent } from "@/services";
import { type SettingsEvent } from "@/settings";
import { mitt, createContext, type Emitter } from "@/utils";

/**
 * The events type.
 */
export type Events = {
  /**
   * The profiles events.
   */
  profiles: ProfilesEvent;
  /**
   * The services events.
   */
  services: ServicesEvent;
  /**
   * The renders events.
   */
  renders: string;
  /**
   * The app events.
   */
  app: AppEvent;
  /**
   * The firebase events.
   */
  firebase: FirebaseEvent;
  /**
   * The auth events.
   */
  auth: AuthEvent;
  /**
   * The projects events.
   */
  projects: ProjectsEvent;
  /**
   * The settings events.
   */
  settings: SettingsEvent;
  /**
   * The config events.
   */
  config: ConfigEvent;
};

/**
 * The events emitter type.
 */
export type EventsEmitter = Emitter<Events>;

/**
 * The events bus context.
 */
export const EventsBusContext = createContext<EventsEmitter>(mitt());
