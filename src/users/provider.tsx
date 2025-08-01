import { useMemo, generateUserID, randomBool } from "@/utils";
import {
  useCreateBloc,
  type CreateBlocProps,
  type DataState,
  type EventHandlersObject,
} from "@/bloc";
import { type EventsEmitter, useEventsBus } from "@/events";

import { type UsersEvent, type User } from "./models";
import { UsersContext, type UsersState } from "./context";

function createHandlers(
  bus: EventsEmitter
): EventHandlersObject<UsersEvent, UsersState> {
  return {
    create: (_, { update }) => {
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
    },
    delete: (event, { value, update }) => {
      const user = value[event.id];

      update((state: UsersState) => {
        const next = {
          ...state,
        };

        delete next[event.id];

        return next;
      });

      bus.emit("users", { type: "deleted", user });
    },
    created: () => {},
    deleted: () => {},
  };
}

export function UsersProvider({ children }: React.PropsWithChildren) {
  const bus = useEventsBus();
  const bloc = useCreateBloc(
    useMemo<CreateBlocProps<UsersEvent, UsersState>>(
      () => ({ initialState: {}, handlers: createHandlers(bus) }),
      [bus]
    )
  );

  return <UsersContext.Provider value={bloc}>{children}</UsersContext.Provider>;
}
