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

/**
 * A component that syncs the app with the event bus.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @returns The component.
 */
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

/**
 * A component that provides all the syncs to the app.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @returns The `Syncs` component.
 */
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
