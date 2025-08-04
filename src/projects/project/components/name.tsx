import { type JSX } from "@/theme";

import { useProjectName } from "..";

export function ProjectNameComponent(): JSX.Element {
  const name = useProjectName();

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

export function ProjectFirstNameComponent(): JSX.Element {
  const name = useProjectName();

  switch (name._tag) {
    case "Some":
      return <>{name.value.first}</>;

    default:
      return <></>;
  }
}

export function ProjectLastNameComponent(): JSX.Element {
  const name = useProjectName();

  switch (name._tag) {
    case "Some":
      return <>{name.value.last}</>;

    default:
      return <></>;
  }
}
