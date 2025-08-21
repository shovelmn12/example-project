import { useListen } from "@/events";
import { noOp } from "@/utils";

export function useOnDelete() {
  useListen("services", (event) => {
    if (event.type === "deleted") {
      // In a real app, you would delete the service from Firebase here.
      noOp();
    }
  });
}
