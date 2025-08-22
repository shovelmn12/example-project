import { type JSX } from "@/theme";
import { useServicesCount } from "@/services";

/**
 * A component that displays the number of services.
 * @returns The `ServicesCount` component.
 */
export function ServicesCount(): JSX.Element {
  return <>{useServicesCount()}</>;
}
