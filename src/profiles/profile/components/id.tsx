import { type JSX } from "@/theme";

import { useProfileID } from "../hooks";

/**
 * A component that displays the ID of a profile.
 * @returns The `ProfileIDComponent` component.
 */
export function ProfileIDComponent(): JSX.Element {
  const id = useProfileID();

  switch (id._tag) {
    case "Some":
      return <>{id.value}</>;

    default:
      return <></>;
  }
}
