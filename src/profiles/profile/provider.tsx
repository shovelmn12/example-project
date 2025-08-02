import { useMemo } from "@/utils";
import { map } from "@/utils/rx";
import { useCreateBloc, type CreatePipeBlocProps } from "@/bloc";

import {
  type ProfilesEvent,
  ProfileContext,
  type ProfileState,
  useProfilesBloc,
} from "..";

export interface ProfileProviderProps {
  readonly id: string;
}

export function ProfileProvider({
  children,
  id,
}: React.PropsWithChildren<ProfileProviderProps>) {
  const profiles = useProfilesBloc();
  const bloc = useCreateBloc(
    useMemo<CreatePipeBlocProps<ProfilesEvent, ProfileState>>(
      () => ({
        initialState: profiles.state[id] ?? { type: "init" },
        source$: profiles.state$.pipe(
          map((state) => state[id] ?? { type: "init" })
        ),
      }),
      [profiles, id]
    )
  );

  return (
    <ProfileContext.Provider value={bloc}>{children}</ProfileContext.Provider>
  );
}
