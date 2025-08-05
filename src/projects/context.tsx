import { createContext } from "@/utils";
import { EMPTY, type Bloc } from "@/bloc";

import { type ProjectsEvent, type ProjectState } from ".";

export type ProjectsState = Record<string, ProjectState>;

export type ProjectsBloc = Bloc<ProjectsEvent, ProjectsState>;

export const ProjectsContext = createContext<ProjectsBloc>({
  ...EMPTY,
  state: {},
});
