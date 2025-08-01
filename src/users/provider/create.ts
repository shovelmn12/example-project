import { type BlocContext, type DataState } from "@/bloc";
import { type EventsEmitter } from "@/events";
import { generateUserID, randomBool } from "@/utils";

import { type CreateUserEvent, type User, type UsersState } from "..";

export interface CreateUtils {
  readonly bus: EventsEmitter;
}

export function onCreate(
  _: CreateUserEvent,
  { update }: BlocContext<UsersState>,
  { bus }: CreateUtils
): void {
  const user: DataState<User> = {
    type: "data",
    value: {
      id: generateUserID(),
      email: "test@test.com",
    },
  };

  if (randomBool()) {
    update((state: UsersState) => ({
      ...state,
      [user.value.id]: user,
    }));

    bus.emit("users", { type: "created", user });
  } else {
    bus.emit("app", {
      type: "error",
      error: {
        source: "users",
        error: {
          type: "unknown",
          error: "Some unknown error",
        },
      },
    });
  }
}
