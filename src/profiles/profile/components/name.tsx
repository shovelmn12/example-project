import { type JSX } from "@/theme";

import { useProfileName } from "../hooks";

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

export function ProfileFirstNameComponent(): JSX.Element {
  const name = useProfileName();

  switch (name._tag) {
    case "Some":
      return <>{name.value.first}</>;

    default:
      return <></>;
  }
}

export function ProfileLastNameComponent(): JSX.Element {
  const name = useProfileName();

  switch (name._tag) {
    case "Some":
      return <>{name.value.last}</>;

    default:
      return <></>;
  }
}
