import { useListen } from "@/events";
import { noOp } from "@/utils";

export function useOnCreate() {
  useListen("services", (event) => {
    if (event.type === "created") {
      // In a real app, you would persist the service to Firebase here.
      noOp();
    }
  });
}
