import type { AppEvent } from "@/app";
import type { FirebaseEvent } from "@/firebase";
import type { UsersEvent } from "@/users";
import { mitt, createContext, type Emitter } from "@/utils";

export type Events = {
  users: UsersEvent;
  renders: string;
  app: AppEvent;
  firebase: FirebaseEvent;
};

export type EventsEmitter = Emitter<Events>;

export const EventsBusContext = createContext<EventsEmitter>(mitt());
