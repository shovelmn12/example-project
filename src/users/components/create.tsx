import { Button, type JSX } from "@/theme";
import { useEventsBus } from "@/events";
import { useCallback } from "@/utils";
import { AddCircle } from "grommet-icons";

export function CreateUser(): JSX.Element {
  const bus = useEventsBus();

  bus.emit("renders", "CreateUser");

  return (
    <Button
      onClick={useCallback(() => bus.emit("users", { type: "create" }), [bus])}
      icon={<AddCircle />}
      label="Create User"
    />
  );
}
