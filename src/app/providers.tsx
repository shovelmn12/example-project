import { UsersProvider } from "@/users";
import { FirebaseProvider } from "@/firebase";
import { type JSX } from "@/theme";

export function Providers({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <FirebaseProvider>
      <UsersProvider>{children}</UsersProvider>
    </FirebaseProvider>
  );
}
