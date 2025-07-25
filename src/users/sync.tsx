import { useEffect } from "@/utils";
import { useEventsBus } from "@/events";

import { useUsersBloc } from "./hooks";

export function UsersSync({ children }: React.PropsWithChildren) {
  const bus = useEventsBus();
  const bloc = useUsersBloc();

  useEffect(() => {
    bus.on("users", bloc.add);

    return () => bus.off("users", bloc.add);
  }, [bus, bloc.add]);

  return <>{children}</>;
}
