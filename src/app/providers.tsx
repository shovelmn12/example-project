import { UsersProvider } from "@/users";
import { FirebaseProvider } from "@/firebase";
import { type JSX } from "@/theme";
import { AuthProvider } from "@/authentication";

export function Providers({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <FirebaseProvider>
      <AuthProvider>
        <UsersProvider>{children}</UsersProvider>
      </AuthProvider>
    </FirebaseProvider>
  );
}
