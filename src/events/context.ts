import type { UsersEvent } from "@/users";
import { mitt, createContext, type Emitter } from "@/utils";

export type Events = { users: UsersEvent; renders: string };

export type EventsEmitter = Emitter<Events>;

export const EventsBusContext = createContext<EventsEmitter>(mitt());
