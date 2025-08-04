import { type JSX } from "@/theme";

import { useProfileID } from "../hooks";

export function ProfileIDComponent(): JSX.Element {
  const id = useProfileID();

  switch (id._tag) {
    case "Some":
      return <>{id.value}</>;

    default:
      return <></>;
  }
}
