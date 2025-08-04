import { type JSX } from "@/theme";

import { useProjectID } from "../hooks";

export function ProjectIDComponent(): JSX.Element {
  const id = useProjectID();

  switch (id._tag) {
    case "Some":
      return <>{id.value}</>;

    default:
      return <></>;
  }
}
