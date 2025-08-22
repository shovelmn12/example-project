import { createContext } from "@/utils";
import { EMPTY, State, type Bloc } from "@/bloc";

import { type ProjectsError, type ProjectsEvent, type Project } from "..";

/**
 * The project state type.
 */
export type ProjectState = State<Project, ProjectsError>;

/**
 * The project BLoC type.
 */
export type ProjectBloc = Bloc<ProjectsEvent, ProjectState>;

/**
 * The project context.
 */
export const ProjectContext = createContext<ProjectBloc>({
  ...EMPTY,
  state: {
    type: "init",
  },
});
