import { Button, type JSX } from "@/theme";
import { useEventsBus } from "@/events";
import { useCallback } from "@/utils";
import { AddCircle } from "grommet-icons";
import { useStrings } from "@/localizations";

export function CreateProject(): JSX.Element {
  const bus = useEventsBus();
  const strings = useStrings();

  return (
    <Button
      onClick={useCallback(
        () => bus.emit("projects", { type: "create" }),
        [bus]
      )}
      icon={<AddCircle />}
      label={strings.projects.actions.create}
    />
  );
}
