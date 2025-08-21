import { type JSX } from "@/theme";

import { useServiceDescription } from "..";

export function ServiceDescriptionComponent(): JSX.Element {
  const description = useServiceDescription();

  switch (description._tag) {
    case "Some":
      return <>{description.value}</>;

    default:
      return <></>;
  }
}
