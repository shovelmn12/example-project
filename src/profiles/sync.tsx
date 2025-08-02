import { useEffect } from "@/utils";
import { useEventsBus } from "@/events";

import { useProfilesBloc } from "./hooks";

export function ProfilesSync({ children }: React.PropsWithChildren) {
  const bus = useEventsBus();
  const bloc = useProfilesBloc();

  useEffect(() => {
    bus.on("profiles", bloc.add);

    return () => bus.off("profiles", bloc.add);
  }, [bus, bloc.add]);

  return <>{children}</>;
}
