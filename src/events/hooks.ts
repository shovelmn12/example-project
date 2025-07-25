import { useContext, type Emitter } from "@/utils";
import { EventsBusContext, type Events } from "./context";

export function useEventsBus(): Emitter<Events> {
  return useContext(EventsBusContext);
}
