import { useCallback, useEffect } from "@/utils";
import { useEventsBus } from "@/events";
import { type JSX } from "@/theme";

import { useLogger } from "./hooks";

export function LoggerSync({ children }: React.PropsWithChildren): JSX.Element {
  if (import.meta.env.DEV) {
    return <DevLogger>{children}</DevLogger>;
  }

  return <>{children}</>;
}

function DevLogger({ children }: React.PropsWithChildren): JSX.Element {
  const bus = useEventsBus();
  const logger = useLogger();
  const onEvent = useCallback(
    (topic: string, data: unknown) =>
      logger.info("TOPIC:", topic, "-", JSON.stringify(data)),
    [logger]
  );

  useEffect(() => {
    bus.on("*", onEvent);

    return () => bus.off("*", onEvent);
  }, [bus, onEvent]);

  return <>{children}</>;
}
