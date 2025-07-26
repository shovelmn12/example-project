import { Button, type JSX } from "@/theme";
import { useEventsBus } from "@/events";
import { useCallback } from "@/utils";
import { AddCircle } from "grommet-icons";

export function CreateUser(): JSX.Element {
  const bus = useEventsBus();

  bus.emit("renders", "CreateUser");

  return (
    <Button
      onPress={useCallback(() => bus.emit("users", { type: "create" }), [bus])}
    >
      <AddCircle /> Create User
    </Button>
  );
}
