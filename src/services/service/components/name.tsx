import { type JSX } from "@/theme";

import { useServiceName } from "..";

/**
 * A component that displays the name of a service.
 * @returns The `ServiceNameComponent` component.
 */
export function ServiceNameComponent(): JSX.Element {
  const name = useServiceName();

  switch (name._tag) {
    case "Some":
      return <>{name.value}</>;

    default:
      return <></>;
  }
}
