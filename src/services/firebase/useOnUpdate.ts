import { useListen } from "@/events";
import { noOp } from "@/utils";

export function useOnUpdate() {
  useListen("services", (event) => {
    if (event.type === "updated") {
      // In a real app, you would persist the service update to Firebase here.
      noOp();
    }
  });
}
