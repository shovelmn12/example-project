import { type JSX } from "@/theme";
import { useProjectsCount } from "@/projects";

export function ProjectsCount(): JSX.Element {
  return <>{useProjectsCount()}</>;
}
