import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  type JSX,
} from "@/theme";
import { ShareOption, Trash } from "@/theme/icons";
import { useEventsBus } from "@/events";
import { stopPropegation, pipe, useMemo, noOp } from "@/utils";

import {
  ProjectDescriptionComponent,
  ProjectNameComponent,
  useProjectID,
} from "..";

export interface ProjectCardProps {
  readonly onClick?: () => void;
}

export function ProjectCard({ onClick }: ProjectCardProps): JSX.Element {
  const bus = useEventsBus();
  const id = useProjectID();
  const onDelete = useMemo(() => {
    switch (id._tag) {
      case "Some":
        return pipe(stopPropegation, () =>
          bus.emit("projects", {
            type: "delete",
            id: id.value,
          })
        );

      default:
        return noOp;
    }
  }, [bus, id]);

  return (
    <Card onClick={onClick} background="ligh-1">
      <CardHeader
        pad={{
          top: "medium",
          horizontal: "medium",
        }}
      >
        <ProjectNameComponent />
      </CardHeader>
      <CardBody pad="medium">
        <ProjectDescriptionComponent />
      </CardBody>
      <CardFooter background="light-2">
        <Button
          onClick={stopPropegation}
          icon={<ShareOption color="plain" />}
          color="transparent"
          hoverIndicator
        />
        <Button
          onClick={onDelete}
          disabled={id._tag === "None"}
          icon={<Trash color="status-critical" />}
          color="transparent"
          hoverIndicator
        />
      </CardFooter>
    </Card>
  );
}
