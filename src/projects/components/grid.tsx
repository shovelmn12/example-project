import {
  Button,
  Data,
  DataTable,
  DataTableColumns,
  Toolbar,
  type JSX,
  type MouseClick,
  type KeyPress,
  Text,
} from "@/theme";
import { useEventsBus } from "@/events";
import { Trash } from "@/theme/icons";
import { useStrings } from "@/localizations";
import { useCallback, useLocation, useMemo } from "@/utils";

import {
  ProjectIDComponent,
  ProjectFirstNameComponent,
  ProjectLastNameComponent,
  ProjectProvider,
  useProjectsIDs,
} from "..";

interface ID {
  readonly id: string;
}

export function ProjectsTable(): JSX.Element {
  const [, navigate] = useLocation();
  const bus = useEventsBus();
  const strings = useStrings();
  const ids = useProjectsIDs();
  const data: ID[] = useMemo(
    () =>
      ids.map((id) => ({
        id,
      })),
    [ids]
  );
  const onRowClick = useCallback(
    (event: MouseClick<ID> | KeyPress<ID>) =>
      navigate(`~/projects/${event.datum.id}`),
    [navigate]
  );

  bus.emit("renders", "ProjectsTable");

  return (
    <Data data={data} gap="medium">
      <Toolbar>
        <DataTableColumns
          options={["value.id", "value.name.first", "value.name.last"]}
          drop
        />
      </Toolbar>
      <DataTable
        onClickRow={onRowClick}
        columns={[
          {
            property: "value.id",
            header: strings.projects.fields.id,
            sortable: true,
            search: true,
            primary: true,
            render(data: ID) {
              return (
                <ProjectProvider id={data.id}>
                  <Text>
                    <ProjectIDComponent />
                  </Text>
                </ProjectProvider>
              );
            },
          },
          {
            property: "value.name.first",
            header: strings.projects.fields.name.first,
            sortable: true,
            search: true,
            render(data: ID) {
              return (
                <ProjectProvider id={data.id}>
                  <Text>
                    <ProjectFirstNameComponent />
                  </Text>
                </ProjectProvider>
              );
            },
          },
          {
            property: "value.name.last",
            header: strings.projects.fields.name.last,
            sortable: true,
            search: true,
            render(data: ID) {
              return (
                <ProjectProvider id={data.id}>
                  <Text>
                    <ProjectLastNameComponent />
                  </Text>
                </ProjectProvider>
              );
            },
          },
          {
            property: "actions",
            header: "",
            render(data: ID) {
              return (
                <Button
                  icon={<Trash />}
                  onClick={() =>
                    bus.emit("projects", { type: "delete", id: data.id })
                  }
                />
              );
            },
          },
        ]}
        resizeable
      />
    </Data>
  );
}
