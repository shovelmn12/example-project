import { useEventsBus } from "@/events";
import { useStrings } from "@/localizations";
import { type JSX } from "@/theme";
import { default as GButton } from "react-google-button";

export interface GoogleButtonProps {
  readonly type?: "dark" | "light";
  readonly disabled?: boolean;
}

export function GoogleSignInButton(
  props: GoogleButtonProps = {
    type: "light",
    disabled: false,
  }
): JSX.Element {
  const bus = useEventsBus();
  const strings = useStrings();

  return (
    <GButton
      label={strings.auth.actions.google.login}
      onClick={() => bus.emit("auth", { type: "login" })}
      {...props}
    />
  );
}

export function GoogleSignUpButton(
  props: GoogleButtonProps = {
    type: "light",
    disabled: false,
  }
): JSX.Element {
  const bus = useEventsBus();
  const strings = useStrings();

  return (
    <GButton
      label={strings.auth.actions.google.signup}
      onClick={() => bus.emit("auth", { type: "login" })}
      {...props}
    />
  );
}
