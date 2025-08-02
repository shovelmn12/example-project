import { type JSX } from "@/theme";
import { useProfilesCount } from "@/profiles";
import { useEventsBus } from "@/events";

export function ProfilesCount(): JSX.Element {
  const bus = useEventsBus();

  bus.emit("renders", "ProfilesCount");

  return <>{useProfilesCount()}</>;
}
