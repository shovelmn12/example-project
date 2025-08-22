import { type JSX } from "@/theme";

import { useServiceDescription } from "..";

/**
 * A component that displays the description of a service.
 * @returns The `ServiceDescriptionComponent` component.
 */
export function ServiceDescriptionComponent(): JSX.Element {
  const description = useServiceDescription();

  switch (description._tag) {
    case "Some":
      return <>{description.value}</>;

    default:
      return <></>;
  }
}
