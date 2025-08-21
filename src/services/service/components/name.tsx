import { type JSX } from "@/theme";

import { useServiceName } from "..";

export function ServiceNameComponent(): JSX.Element {
  const name = useServiceName();

  switch (name._tag) {
    case "Some":
      return <>{name.value}</>;

    default:
      return <></>;
  }
}
