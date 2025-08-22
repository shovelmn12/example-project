import { type JSX } from "@/theme";

import { useProfileName } from "../hooks";

/**
 * A component that displays the full name of a profile.
 * @returns The `ProfileNameComponent` component.
 */
export function ProfileNameComponent(): JSX.Element {
  const name = useProfileName();

  switch (name._tag) {
    case "Some":
      return (
        <>
          {name.value.first} {name.value.last}
        </>
      );

    default:
      return <></>;
  }
}

/**
 * A component that displays the first name of a profile.
 * @returns The `ProfileFirstNameComponent` component.
 */
export function ProfileFirstNameComponent(): JSX.Element {
  const name = useProfileName();

  switch (name._tag) {
    case "Some":
      return <>{name.value.first}</>;

    default:
      return <></>;
  }
}

/**
 * A component that displays the last name of a profile.
 * @returns The `ProfileLastNameComponent` component.
 */
export function ProfileLastNameComponent(): JSX.Element {
  const name = useProfileName();

  switch (name._tag) {
    case "Some":
      return <>{name.value.last}</>;

    default:
      return <></>;
  }
}
