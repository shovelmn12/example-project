import { type JSX } from "@/theme";

import { useProjectName } from "..";

/**
 * A component that displays the name of a project.
 * @returns The `ProjectNameComponent` component.
 */
export function ProjectNameComponent(): JSX.Element {
  const name = useProjectName();

  switch (name._tag) {
    case "Some":
      return <>{name.value}</>;

    default:
      return <></>;
  }
}
