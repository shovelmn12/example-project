import { Button, Card, CardBody, Text, type JSX } from "@/theme";
import { useEventsBus } from "@/events";
import { useCallback } from "@/utils";
import { Projects } from "@/theme/icons";
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
      pad="none"
      hoverIndicator
    >
      {({ hover }) => (
        <Card pad="medium" fill>
          <CardBody justify="center" align="center" gap="small">
            <Text weight="bold">{strings.projects.actions.create}</Text>
            <Projects color={hover ? "dark-1" : "light-1"} size="large" />
          </CardBody>
        </Card>
      )}
    </Button>
  );
}
