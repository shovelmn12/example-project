import { useEventsBus } from "@/events";
import { Button, type JSX } from "@/theme";
import { Logout } from "grommet-icons";

export function LogoutButton(): JSX.Element {
  const bus = useEventsBus();

  return (
    <Button
      icon={<Logout />}
      onClick={() => bus.emit("auth", { type: "logout" })}
    />
  );
}
