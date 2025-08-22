import { type JSX } from "@/theme";

import { useProjectID } from "..";

/**
 * A component that displays the ID of a project.
 * @returns The `ProjectIDComponent` component.
 */
export function ProjectIDComponent(): JSX.Element {
  const id = useProjectID();

  switch (id._tag) {
    case "Some":
      return <>{id.value}</>;

    default:
      return <></>;
  }
}
