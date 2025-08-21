import { useEffect } from "@/utils";
import { useEventsBus } from "@/events";

import { useProjectsBloc } from ".";

export function ProjectsSync({ children }: React.PropsWithChildren) {
  const bus = useEventsBus();
  const bloc = useProjectsBloc();

  useEffect(() => {
    bus.on("projects", bloc.add);

    return () => bus.off("projects", bloc.add);
  }, [bus, bloc.add]);

  return <>{children}</>;
}
