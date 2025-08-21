import { useCallback, useEffect } from "@/utils";
import { useEventsBus } from "@/events";
import { type JSX } from "@/theme";

import { useLogger } from "./hooks";
import type { AppEvent } from "@/app";
import { useConfigShouldLog } from "@/config";

export function LoggerSync({ children }: React.PropsWithChildren): JSX.Element {
  if (useConfigShouldLog()) {
    return <Logger>{children}</Logger>;
  }

  return <>{children}</>;
}

function Logger({ children }: React.PropsWithChildren): JSX.Element {
  const bus = useEventsBus();
  const logger = useLogger();
  const onEvent = useCallback(
    (topic: string, data: unknown) => {
      if (topic === "app" && (data as AppEvent).type === "error") {
        logger.error("TOPIC:", topic, "-", JSON.stringify(data));
      } else {
        logger.info("TOPIC:", topic, "-", JSON.stringify(data));
      }
    },
    [logger]
  );

  useEffect(() => {
    bus.on("*", onEvent);

    return () => bus.off("*", onEvent);
  }, [bus, onEvent]);

  return <>{children}</>;
}
