import { createContext } from "@/utils";
import { EMPTY, type Bloc } from "@/bloc";

import { type ProjectsEvent, type ProjectState } from ".";

/**
 * The projects state type.
 */
export type ProjectsState = Record<string, ProjectState>;

/**
 * The projects BLoC type.
 */
export type ProjectsBloc = Bloc<ProjectsEvent, ProjectsState>;

/**
 * The projects context.
 */
export const ProjectsContext = createContext<ProjectsBloc>({
  ...EMPTY,
  state: {},
});
