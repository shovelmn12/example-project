import { useEventsBus } from "@/events";
import { type JSX } from "@/theme";
import { useEffect } from "@/utils";

import { useServicesBloc } from ".";

/**
 * A component that syncs the services BLoC with the event bus.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @returns The component.
 */
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
