import { type JSX } from "@/theme";
import { UsersSync } from "@/users";
import { FirebaseSync } from "@/firebase";
import { useEventsBus } from "@/events";
import { useEffect } from "@/utils";
import { AuthSync } from "@/authentication";

export function AppSync({ children }: React.PropsWithChildren) {
  const bus = useEventsBus();

  useEffect(
    () =>
      bus.emit("app", {
        type: "init",
      }),
    [bus]
  );

  return <>{children}</>;
}

export function Syncs({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <AppSync>
      <FirebaseSync>
        <AuthSync>
          <UsersSync>{children}</UsersSync>
        </AuthSync>
      </FirebaseSync>
    </AppSync>
  );
}
