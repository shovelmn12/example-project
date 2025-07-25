import { UsersProvider } from "@/users/provider";
import { type JSX } from "@/theme";

export function Providers({ children }: React.PropsWithChildren): JSX.Element {
  return <UsersProvider>{children}</UsersProvider>;
}
