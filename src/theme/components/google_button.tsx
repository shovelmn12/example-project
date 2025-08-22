import { default as GButton } from "react-google-button";

import { useEventsBus } from "@/events";
import { useStrings } from "@/localizations";
import { type JSX } from "@/theme";

/**
 * The props for the `GoogleButton` component.
 */
export interface GoogleButtonProps {
  /**
   * The type of the button.
   * @default "light"
   */
  readonly type?: "dark" | "light";
  /**
   * Whether the button is disabled.
   * @default false
   */
  readonly disabled?: boolean;
}

/**
 * A button to sign in with Google.
 * @param props The props for the component.
 * @returns The `GoogleSignInButton` component.
 */
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

/**
 * A button to sign up with Google.
 * @param props The props for the component.
 * @returns The `GoogleSignUpButton` component.
 */
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
