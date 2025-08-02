import { type AppEvent } from "@/app";
import { type AuthEvent } from "@/authentication";
import { type FirebaseEvent } from "@/firebase";
import { type ProfileEvent, type ProfilesEvent } from "@/profiles";
import { mitt, createContext, type Emitter } from "@/utils";

export type Events = {
  profiles: ProfilesEvent;
  profile: ProfileEvent;
  renders: string;
  app: AppEvent;
  firebase: FirebaseEvent;
  auth: AuthEvent;
};

export type EventsEmitter = Emitter<Events>;

export const EventsBusContext = createContext<EventsEmitter>(mitt());
