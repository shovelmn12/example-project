import { ProfilesProvider } from "@/profiles";
import { FirebaseProvider } from "@/firebase";
import { type JSX } from "@/theme";
import { AuthProvider } from "@/authentication";
import { ProjectsProvider } from "@/projects";
import { SettingsProvider } from "@/settings";

export function Providers({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <SettingsProvider>
      <FirebaseProvider>
        <AuthProvider>
          <ProfilesProvider>
            <ProjectsProvider>{children}</ProjectsProvider>
          </ProfilesProvider>
        </AuthProvider>
      </FirebaseProvider>
    </SettingsProvider>
  );
}
