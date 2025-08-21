import { type JSX } from "@/theme";

import { useServiceID } from "..";

export function ServiceIDComponent(): JSX.Element {
  const id = useServiceID();

  switch (id._tag) {
    case "Some":
      return <>{id.value}</>;

    default:
      return <></>;
  }
}
