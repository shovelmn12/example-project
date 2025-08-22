import { useMemo, mitt } from "@/utils";
import { type JSX } from "@/theme";

import { EventsBusContext } from ".";

/**
 * A provider for the events bus.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @returns The events bus provider.
 */
export function EventsBusProvider({
  children,
}: React.PropsWithChildren): JSX.Element {
  return (
    <EventsBusContext.Provider value={useMemo(() => mitt(), [])}>
      {children}
    </EventsBusContext.Provider>
  );
}
