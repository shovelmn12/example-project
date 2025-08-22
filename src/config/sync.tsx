import { useCallback, useEffect } from "@/utils";
import { useEventsBus } from "@/events";
import { type AppEvent } from "@/app";

import { useConfigBloc } from "./hooks";

/**
 * A component that syncs the config BLoC with the event bus.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @returns The component.
 */
export function ConfigSync({ children }: React.PropsWithChildren) {
  const bus = useEventsBus();
  const bloc = useConfigBloc();
  const onInit = useCallback(
    (event: AppEvent) => {
      if (event.type === "pre-init") {
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
