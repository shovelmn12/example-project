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
    <Card onClick={onClick}>
      <CardHeader>
        <ProjectNameComponent />
      </CardHeader>
      <CardBody>
        <ProjectDescriptionComponent />
      </CardBody>
      <CardFooter justify="end" background="light-2">
        <Button icon={<ShareOption color="plain" />} hoverIndicator />
        <Button icon={<Trash color="status-critical" />} hoverIndicator />
      </CardFooter>
    </Card>
  );
}
