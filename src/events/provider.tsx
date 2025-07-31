import { useMemo, mitt } from "@/utils";
import { type JSX } from "@/theme";

import { EventsBusContext } from "./context";

export function EventsBusProvider({
  children,
}: React.PropsWithChildren): JSX.Element {
  return (
    <EventsBusContext.Provider value={useMemo(() => mitt(), [])}>
      {children}
    </EventsBusContext.Provider>
  );
}
