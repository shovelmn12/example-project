import { Text, type JSX } from "@/theme";
import { useUsersCount } from "@/users";
import { useEventsBus } from "@/events";

export function UsersCount(): JSX.Element {
  const bus = useEventsBus();

  bus.emit("renders", "UsersCount");

  return <Text>User Count: {useUsersCount()}</Text>;
}
