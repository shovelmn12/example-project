import { useCallback, useEffect } from "@/utils";
import { useEventsBus } from "@/events";
import { type AppEvent } from "@/app";

import { useFirebaseBloc } from "./hooks";

export function FirebaseSync({ children }: React.PropsWithChildren) {
  const bus = useEventsBus();
  const bloc = useFirebaseBloc();
  const onInit = useCallback(
    (event: AppEvent) => {
      if (event.type === "init") {
        bus.emit("firebase", { type: "init" });
      }
    },
    [bus]
  );

  useEffect(() => {
    bus.on("firebase", bloc.add);
    bus.on("app", onInit);

    return () => {
      bus.off("firebase", bloc.add);
      bus.off("app", onInit);
    };
  }, [bus, bloc.add, onInit]);

  return <>{children}</>;
}
