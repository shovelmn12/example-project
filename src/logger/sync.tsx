import { useCallback, useEffect } from "@/utils";
import { useEventsBus } from "@/events";
import { type JSX } from "@/theme";
import type { AppEvent } from "@/app";
import { useConfigShouldLog } from "@/config";

import { useLogger } from ".";

/**
 * A component that syncs the logger with the event bus.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @returns The component.
 */
export function LoggerSync({ children }: React.PropsWithChildren): JSX.Element {
  if (useConfigShouldLog()) {
    return <Logger>{children}</Logger>;
  }

  return <>{children}</>;
}

/**
 * A component that logs all events from the event bus.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @returns The component.
 */
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
