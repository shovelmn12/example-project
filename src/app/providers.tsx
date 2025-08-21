import { type JSX } from "@/theme";
import { ProfilesProvider } from "@/profiles";
import { FirebaseProvider } from "@/firebase";
import { AuthProvider } from "@/authentication";
import { ProjectsProvider } from "@/projects";
import { ServicesProvider } from "@/services";
import { SettingsProvider } from "@/settings";
import { ConfigProvider } from "@/config";

export function Providers({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <ConfigProvider>
      <SettingsProvider>
        <FirebaseProvider>
          <AuthProvider>
            <ProfilesProvider>
              <ProjectsProvider>
                <ServicesProvider>{children}</ServicesProvider>
              </ProjectsProvider>
            </ProfilesProvider>
          </AuthProvider>
        </FirebaseProvider>
      </SettingsProvider>
    </ConfigProvider>
  );
}
