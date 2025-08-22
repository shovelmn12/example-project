import { type JSX } from "@/theme";
import { useEffect } from "@/utils";
import { useEventsBus } from "@/events";

import { useProfilesBloc } from "./hooks";

/**
 * A component that syncs the profiles BLoC with the event bus.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @returns The component.
 */
export function ProfilesSync({
  children,
}: React.PropsWithChildren): JSX.Element {
  const bus = useEventsBus();
  const bloc = useProfilesBloc();

  useEffect(() => {
    bus.on("profiles", bloc.add);

    return () => bus.off("profiles", bloc.add);
  }, [bus, bloc.add]);

  return <>{children}</>;
}
