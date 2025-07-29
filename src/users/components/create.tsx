import { Button, type JSX } from "@/theme";
import { useEventsBus } from "@/events";
import { useCallback } from "@/utils";
import { CirclePlus } from "lucide-react";

export function CreateUser(): JSX.Element {
  const bus = useEventsBus();

  bus.emit("renders", "CreateUser");

  return (
    <Button
      onClick={useCallback(() => bus.emit("users", { type: "create" }), [bus])}
      icon={<CirclePlus size="16px" />}
      label="Create User"
    />
  );
}
