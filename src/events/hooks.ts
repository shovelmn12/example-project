import { useContext, type Emitter } from "@/utils";
import { EventsBusContext, type Events } from "./context";

/**
 * A hook to get the events bus.
 * @returns The events bus.
 */
export function useEventsBus(): Emitter<Events> {
  return useContext(EventsBusContext);
}
