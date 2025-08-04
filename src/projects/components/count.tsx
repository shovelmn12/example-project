import { type JSX } from "@/theme";
import { useProjectsCount } from "@/projects";
import { useEventsBus } from "@/events";

export function ProjectsCount(): JSX.Element {
  const bus = useEventsBus();

  bus.emit("renders", "ProjectsCount");

  return <>{useProjectsCount()}</>;
}
