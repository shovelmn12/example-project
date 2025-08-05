import { type JSX } from "@/theme";

import { useProjectName } from "..";

export function ProjectNameComponent(): JSX.Element {
  const name = useProjectName();

  switch (name._tag) {
    case "Some":
      return <>{name.value}</>;

    default:
      return <></>;
  }
}
