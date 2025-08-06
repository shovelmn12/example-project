import { useCallback, useEffect } from "@/utils";
import { useEventsBus } from "@/events";
import { type AppEvent } from "@/app";

import { useConfigBloc } from "./hooks";

export function ConfigSync({ children }: React.PropsWithChildren) {
  const bus = useEventsBus();
  const bloc = useConfigBloc();
  const onInit = useCallback(
    (event: AppEvent) => {
      if (event.type === "init") {
        bus.emit("config", { type: "init" });
      }
    },
    [bus]
  );

  useEffect(() => {
    bus.on("config", bloc.add);
    bus.on("app", onInit);

    return () => {
      bus.off("config", bloc.add);
      bus.off("app", onInit);
    };
  }, [bus, bloc.add, onInit]);

  return <>{children}</>;
}
