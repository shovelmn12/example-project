import { createContext } from "@/utils";
import { EMPTY, State, type Bloc } from "@/bloc";

import { type ProjectsError, type ProjectsEvent, type Project } from "..";

export type ProjectState = State<Project, ProjectsError>;

export type ProjectBloc = Bloc<ProjectsEvent, ProjectState>;

export const ProjectContext = createContext<ProjectBloc>({
  ...EMPTY,
  state: {
    type: "init",
  },
});
