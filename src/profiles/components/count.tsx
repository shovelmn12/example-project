import { type JSX } from "@/theme";
import { useProfilesCount } from "@/profiles";

/**
 * A component that displays the number of profiles.
 * @returns The `ProfilesCount` component.
 */
export function ProfilesCount(): JSX.Element {
  return <>{useProfilesCount()}</>;
}
