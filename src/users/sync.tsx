import { useEffect } from "@/utils";
import { useEventsBus } from "@/events";

import { useUsersBloc } from "./hooks";
import { UsersContext } from "./context";

export function UsersSync({ children }: React.PropsWithChildren) {
  const bus = useEventsBus();
  const bloc = useUsersBloc();

  useEffect(() => {
    bus.on("users", bloc.add);

    return () => bus.off("users", bloc.add);
  }, [bus, bloc.add]);

  return <UsersContext.Provider value={bloc}>{children}</UsersContext.Provider>;
}
