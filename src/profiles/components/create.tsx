import { Button, type JSX } from "@/theme";
import { useEventsBus } from "@/events";
import { useCallback } from "@/utils";
import { AddCircle } from "grommet-icons";
import { useStrings } from "@/localizations";

export function CreateProfile(): JSX.Element {
  const bus = useEventsBus();
  const strings = useStrings();

  return (
    <Button
      onClick={useCallback(
        () => bus.emit("profiles", { type: "create" }),
        [bus]
      )}
      icon={<AddCircle />}
      label={strings.profiles.actions.create}
    />
  );
}
