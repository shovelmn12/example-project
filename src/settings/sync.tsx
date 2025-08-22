import { type JSX } from "@/theme";
import { useCallback, useEffect } from "@/utils";
import { useEventsBus } from "@/events";
import { type AppEvent } from "@/app";

import { useSettingsBloc } from ".";

export function SettingsSync({
  children,
}: React.PropsWithChildren): JSX.Element {
  const bus = useEventsBus();
  const bloc = useSettingsBloc();
  const onInit = useCallback(
    (event: AppEvent) => {
      if (event.type === "init") {
        bus.emit("settings", { type: "init" });
      }
    },
    [bus]
  );

  useEffect(() => {
    bus.on("settings", bloc.add);
    bus.on("app", onInit);

    return () => {
      bus.off("settings", bloc.add);
      bus.off("app", onInit);
    };
  }, [bus, bloc.add, onInit]);

  return <>{children}</>;
}
