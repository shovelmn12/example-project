import { type JSX } from "@/theme";
import { ProfilesSync } from "@/profiles";
import { FirebaseSync } from "@/firebase";
import { useEventsBus } from "@/events";
import { useEffect } from "@/utils";
import { AuthSync } from "@/authentication";
import { ProjectsSync } from "@/projects";
import { SettingsSync } from "@/settings";
import { ConfigSync } from "@/config";

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
      <ConfigSync>
        <SettingsSync>
          <FirebaseSync>
            <AuthSync>
              <ProfilesSync>
                <ProjectsSync>{children}</ProjectsSync>
              </ProfilesSync>
            </AuthSync>
          </FirebaseSync>
        </SettingsSync>
      </ConfigSync>
    </AppSync>
  );
}
