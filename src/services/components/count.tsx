import { type JSX } from "@/theme";
import { useServicesCount } from "@/services";

export function ServicesCount(): JSX.Element {
  return <>{useServicesCount()}</>;
}
