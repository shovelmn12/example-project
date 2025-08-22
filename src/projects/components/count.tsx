import { type JSX } from "@/theme";
import { useProjectsCount } from "@/projects";

/**
 * A component that displays the number of projects.
 * @returns The `ProjectsCount` component.
 */
export function ProjectsCount(): JSX.Element {
  return <>{useProjectsCount()}</>;
}
