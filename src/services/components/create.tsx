import { Button, type JSX } from "@/theme";
import { useEventsBus } from "@/events";
import { useCallback } from "@/utils";
import { AddCircle } from "grommet-icons";
import { useStrings } from "@/localizations";

export function CreateService(): JSX.Element {
  const bus = useEventsBus();
  const strings = useStrings();

  return (
    <Button
      onClick={useCallback(
        () => bus.emit("services", { type: "create" }),
        [bus]
      )}
      icon={<AddCircle />}
      label={strings.services.actions.create}
    />
  );
}
