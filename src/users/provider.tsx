import { useMemo, generateUserID } from "@/utils";
import {
  useCreateBloc,
  type CreateBlocProps,
  type EventHandlersObject,
} from "@/bloc";
import { type EventsEmitter, useEventsBus } from "@/events";

import { type UsersEvent, type User } from "./models";
import { UsersContext } from "./context";

function createHandlers(
  bus: EventsEmitter
): EventHandlersObject<UsersEvent, Record<string, User>> {
  return {
    create: (_, { update }) => {
      const user = {
        id: generateUserID(),
        email: "test@test.com",
      };

      update((state: Record<string, User>) => ({
        ...state,
        [user.id]: user,
      }));

      bus.emit("users", { type: "created", user });
    },
    delete: (event, { value, update }) => {
      const user = value[event.id];

      update((state: Record<string, User>) => {
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
    useMemo<CreateBlocProps<UsersEvent, Record<string, User>>>(
      () => ({ initialState: {}, handlers: createHandlers(bus) }),
      [bus]
    )
  );

  return <UsersContext.Provider value={bloc}>{children}</UsersContext.Provider>;
}
