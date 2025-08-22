import { type JSX } from "@/theme";
import { useEffect } from "@/utils";
import { useEventsBus } from "@/events";

import { useProjectsBloc } from ".";

<<<<<<< HEAD
export function ProjectsSync({
  children,
}: React.PropsWithChildren): JSX.Element {
=======
/**
 * A component that syncs the projects BLoC with the event bus.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @returns The component.
 */
export function ProjectsSync({ children }: React.PropsWithChildren) {
>>>>>>> main
  const bus = useEventsBus();
  const bloc = useProjectsBloc();

  useEffect(() => {
    bus.on("projects", bloc.add);

    return () => bus.off("projects", bloc.add);
  }, [bus, bloc.add]);

  return <>{children}</>;
}
