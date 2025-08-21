import { type JSX } from "@/theme";
import { ProfilesSync } from "@/profiles";
import { FirebaseSync } from "@/firebase";
import { useEventsBus } from "@/events";
import { useEffect } from "@/utils";
import { AuthSync } from "@/authentication";
import { ProjectsSync } from "@/projects";
import { ServicesSync } from "@/services/sync";
import { SettingsSync } from "@/settings";
import { ConfigSync } from "@/config";
import { LoggerSync } from "@/logger";

import { useIsAppPreInit } from ".";

function AppSync({ children }: React.PropsWithChildren) {
  const bus = useEventsBus();
  const isPreInit = useIsAppPreInit();

  useEffect(
    () =>
      bus.emit("app", {
        type: "pre-init",
      }),
    [bus]
  );

  useEffect(() => {
    if (isPreInit) {
      bus.emit("app", {
        type: "init",
      });
    }
  }, [bus, isPreInit]);

  return <>{children}</>;
}

export function Syncs({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <AppSync>
      <LoggerSync>
        <ConfigSync>
          <SettingsSync>
            <FirebaseSync>
              <AuthSync>
                <ProfilesSync>
                  <ProjectsSync>
                    <ServicesSync>{children}</ServicesSync>
                  </ProjectsSync>
                </ProfilesSync>
              </AuthSync>
            </FirebaseSync>
          </SettingsSync>
        </ConfigSync>
      </LoggerSync>
    </AppSync>
  );
}
