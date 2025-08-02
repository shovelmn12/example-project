import { ProfilesProvider } from "@/profiles";
import { FirebaseProvider } from "@/firebase";
import { type JSX } from "@/theme";
import { AuthProvider } from "@/authentication";

export function Providers({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <FirebaseProvider>
      <AuthProvider>
        <ProfilesProvider>{children}</ProfilesProvider>
      </AuthProvider>
    </FirebaseProvider>
  );
}
