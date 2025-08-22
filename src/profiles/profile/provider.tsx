import { useMemo, memo } from "@/utils";
import { map } from "@/utils/rx";
import { useCreateBloc, type CreatePipeBlocProps } from "@/bloc";

import {
  type ProfilesEvent,
  ProfileContext,
  type ProfileState,
  useProfilesBloc,
} from "..";

/**
 * The props for the `ProfileProvider` component.
 */
export interface ProfileProviderProps {
  /**
   * The ID of the profile.
   */
  readonly id: string;
}

/**
 * The internal provider for the profile BLoC.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @param props.id The ID of the profile.
 * @returns The profile provider.
 */
function Provider({
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

/**
 * A provider for the profile BLoC.
 */
export const ProfileProvider = memo(Provider);
