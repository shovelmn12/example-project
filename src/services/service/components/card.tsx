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
  ServiceDescriptionComponent,
  ServiceNameComponent,
  useServiceID,
} from "..";

/**
 * The props for the `ServiceCard` component.
 */
export interface ServiceCardProps {
  /**
   * The function to call when the card is clicked.
   */
  readonly onClick?: () => void;
}

/**
 * A card that displays a service.
 * @param props The props for the component.
 * @returns The `ServiceCard` component.
 */
export function ServiceCard({ onClick }: ServiceCardProps): JSX.Element {
  const bus = useEventsBus();
  const id = useServiceID();
  const onDelete = useMemo(() => {
    switch (id._tag) {
      case "Some":
        return pipe(stopPropegation, () =>
          bus.emit("services", {
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
        <ServiceNameComponent />
      </CardHeader>
      <CardBody pad="medium">
        <ServiceDescriptionComponent />
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
