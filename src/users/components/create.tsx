import { Button, type JSX, Icons } from "@/theme";
import { useEventsBus } from "@/events";
import { useCallback } from "@/utils";

export function CreateUser(): JSX.Element {
  const bus = useEventsBus();

  bus.emit("renders", "CreateUser");

  return (
    <Button
      onClick={useCallback(() => bus.emit("users", { type: "create" }), [bus])}
    >
      <Icons.Plus /> Create User
    </Button>
  );
}
