import { useMemo } from "@/utils";
import {
  useCreateBloc,
  type CreateBlocProps,
  type EventHandlersObject,
} from "@/bloc";
import { type EventsEmitter, useEventsBus } from "@/events";

import {
  type ProfileEvent,
  ProfileContext,
  type ProfileState,
  useProfilesBloc,
} from "../..";

import { onUpdate } from "./update";

function createHandlers(
  bus: EventsEmitter
): EventHandlersObject<ProfileEvent, ProfileState> {
  return {
    update: (event, context) => onUpdate(event, context, { bus }),
    updated: () => {},
  };
}

export interface ProfileProviderProps {
  readonly id: string;
}

export function ProfileProvider({
  children,
  id,
}: React.PropsWithChildren<ProfileProviderProps>) {
  const bus = useEventsBus();
  const profiles = useProfilesBloc();
  const bloc = useCreateBloc(
    useMemo<CreateBlocProps<ProfileEvent, ProfileState>>(
      () => ({
        initialState: profiles.state[id] ?? { type: "init" },
        handlers: createHandlers(bus),
      }),
      [bus, profiles, id]
    )
  );

  return (
    <ProfileContext.Provider value={bloc}>{children}</ProfileContext.Provider>
  );
}
