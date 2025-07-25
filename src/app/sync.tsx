import { UsersSync } from "@/users";
import { FirebaseSync } from "@/firebase";
import { type JSX } from "@/theme";
import { useEventsBus } from "@/events";
import { useEffect } from "react";

export function AppSync({ children }: React.PropsWithChildren) {
  const bus = useEventsBus();

  useEffect(() => bus.emit("app", "init"), [bus]);

  return <>{children}</>;
}

export function Syncs({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <AppSync>
      <FirebaseSync>
        <UsersSync>{children}</UsersSync>
      </FirebaseSync>
    </AppSync>
  );
}
