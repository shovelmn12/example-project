import { Button, type JSX } from "@/theme";
import { useEventsBus } from "@/events";
import { useCallback } from "@/utils";
import { AddCircle } from "grommet-icons";
import { useStrings } from "@/localizations";

export function CreateUser(): JSX.Element {
  const bus = useEventsBus();
  const strings = useStrings();

  bus.emit("renders", "CreateUser");

  return (
    <Button
      onClick={useCallback(() => bus.emit("users", { type: "create" }), [bus])}
      icon={<AddCircle />}
      label={strings.users.actions.create}
    />
  );
}
