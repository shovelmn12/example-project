import { type JSX } from "@/theme";
import { useProfilesCount } from "@/profiles";

export function ProfilesCount(): JSX.Element {
  return <>{useProfilesCount()}</>;
}
