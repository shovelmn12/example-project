import { type AppEvent } from "@/app";
import { type AuthEvent } from "@/authentication";
import { type FirebaseEvent } from "@/firebase";
import { type ProfilesEvent } from "@/profiles";
import { type ProjectsEvent } from "@/projects";
import { type SettingsEvent } from "@/settings";
import { mitt, createContext, type Emitter } from "@/utils";

export type Events = {
  profiles: ProfilesEvent;
  renders: string;
  app: AppEvent;
  firebase: FirebaseEvent;
  auth: AuthEvent;
  projects: ProjectsEvent;
  settings: SettingsEvent;
};

export type EventsEmitter = Emitter<Events>;

export const EventsBusContext = createContext<EventsEmitter>(mitt());
