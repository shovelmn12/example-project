import { useCallback, useEffect } from "@/utils";
import { useEventsBus } from "@/events";
import { type ConfigEvent } from "@/config";

import { useFirebaseBloc } from ".";

/**
 * A component that syncs the Firebase BLoC with the event bus.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @returns The component.
 */
export function FirebaseSync({ children }: React.PropsWithChildren) {
  const bus = useEventsBus();
  const bloc = useFirebaseBloc();
  const onInit = useCallback(
    (event: ConfigEvent) => {
      if (event.type === "initialized") {
        bus.emit("firebase", {
          type: "init",
          config: event.config.env.firebase,
        });
      }
    },
    [bus]
  );

  useEffect(() => {
    bus.on("firebase", bloc.add);
    bus.on("config", onInit);

    return () => {
      bus.off("firebase", bloc.add);
      bus.off("config", onInit);
    };
  }, [bus, bloc.add, onInit]);

  return <>{children}</>;
}
