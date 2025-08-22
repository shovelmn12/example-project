import { type JSX } from "@/theme";

import { useProjectDescription } from "..";

/**
 * A component that displays the description of a project.
 * @returns The `ProjectDescriptionComponent` component.
 */
export function ProjectDescriptionComponent(): JSX.Element {
  const description = useProjectDescription();

  switch (description._tag) {
    case "Some":
      return <>{description.value}</>;

    default:
      return <></>;
  }
}
