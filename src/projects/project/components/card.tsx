import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  type JSX,
} from "@/theme";
import { ShareOption, Trash } from "@/theme/icons";

import { ProjectDescriptionComponent, ProjectNameComponent } from "..";

export interface ProjectCardProps {
  readonly onClick?: () => void;
}

export function ProjectCard({ onClick }: ProjectCardProps): JSX.Element {
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
          icon={<ShareOption color="plain" />}
          color="transparent"
          hoverIndicator
        />
        <Button
          icon={<Trash color="status-critical" />}
          color="transparent"
          hoverIndicator
        />
      </CardFooter>
    </Card>
  );
}
