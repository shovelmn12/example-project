import { type JSX } from "@/theme";

import { useProjectDescription } from "..";

export function ProjectDescriptionComponent(): JSX.Element {
  const description = useProjectDescription();

  switch (description._tag) {
    case "Some":
      return <>{description.value}</>;

    default:
      return <></>;
  }
}
