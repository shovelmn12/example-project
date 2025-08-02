import { useEffect } from "@/utils";
import { useEventsBus } from "@/events";

import { useProfileBloc } from "./hooks";

export function ProfileSync({ children }: React.PropsWithChildren) {
  const bus = useEventsBus();
  const bloc = useProfileBloc();

  useEffect(() => {
    bus.on("profile", bloc.add);

    return () => bus.off("profile", bloc.add);
  }, [bus, bloc.add]);

  return <>{children}</>;
}
