import { type JSX } from "@/theme";

import { useServiceID } from "..";

/**
 * A component that displays the ID of a service.
 * @returns The `ServiceIDComponent` component.
 */
export function ServiceIDComponent(): JSX.Element {
  const id = useServiceID();

  switch (id._tag) {
    case "Some":
      return <>{id.value}</>;

    default:
      return <></>;
  }
}
