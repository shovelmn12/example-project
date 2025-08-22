import { useEventsBus } from "@/events";
import { Button, type JSX } from "@/theme";
import { Logout } from "@/theme/icons";

/**
 * A button to log out.
 * @returns The `LogoutButton` component.
 */
export function LogoutButton(): JSX.Element {
  const bus = useEventsBus();

  return (
    <Button
      icon={<Logout />}
      onClick={() => bus.emit("auth", { type: "logout" })}
    />
  );
}
