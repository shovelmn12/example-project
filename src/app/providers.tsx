import { type JSX } from "@/theme";
import { ProfilesProvider } from "@/profiles";
import { FirebaseProvider } from "@/firebase";
import { AuthProvider } from "@/authentication";
import { ProjectsProvider } from "@/projects";
import { SettingsProvider } from "@/settings";
import { ConfigProvider } from "@/config";

export function Providers({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <ConfigProvider>
      <SettingsProvider>
        <FirebaseProvider>
          <AuthProvider>
            <ProfilesProvider>
              <ProjectsProvider>{children}</ProjectsProvider>
            </ProfilesProvider>
          </AuthProvider>
        </FirebaseProvider>
      </SettingsProvider>
    </ConfigProvider>
  );
}
