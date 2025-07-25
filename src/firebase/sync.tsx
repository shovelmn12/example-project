import { useCallback, useEffect } from "@/utils";
import { useEventsBus } from "@/events";

import { useFirebaseBloc } from "./hooks";

export function FirebaseSync({ children }: React.PropsWithChildren) {
  const bus = useEventsBus();
  const bloc = useFirebaseBloc();
  const onInit = useCallback(
    (event: string) => {
      if (event === "init") {
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
