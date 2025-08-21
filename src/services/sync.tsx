import { useEventsBus } from "@/events";
import { type JSX } from "@/theme";
import { useEffect } from "@/utils";

import { useServicesBloc } from ".";

export function ServicesSync({
  children,
}: React.PropsWithChildren): JSX.Element {
  const bus = useEventsBus();
  const bloc = useServicesBloc();

  useEffect(() => {
    bus.on("services", bloc.add);

    return () => bus.off("services", bloc.add);
  }, [bus, bloc.add]);

  return <>{children}</>;
}
