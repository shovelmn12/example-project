import { useListenToServices } from "./hooks/listen";
import { useOnCreate, useOnDelete, useOnUpdate } from "./firebase";
import { type JSX } from "@/theme";

export function ServicesSync({
  children,
}: React.PropsWithChildren): JSX.Element {
  useListenToServices();
  useOnCreate();
  useOnDelete();
  useOnUpdate();
  return <>{children}</>;
}
