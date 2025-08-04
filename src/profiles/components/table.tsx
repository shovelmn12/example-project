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
  ProfileIDComponent,
  ProfileFirstNameComponent,
  ProfileLastNameComponent,
  ProfileProvider,
  useProfilesIDs,
} from "..";

interface ID {
  readonly id: string;
}

export function ProfilesTable(): JSX.Element {
  const [, navigate] = useLocation();
  const bus = useEventsBus();
  const strings = useStrings();
  const ids = useProfilesIDs();
  const data: ID[] = useMemo(
    () =>
      ids.map((id) => ({
        id,
      })),
    [ids]
  );
  const onRowClick = useCallback(
    (event: MouseClick<ID> | KeyPress<ID>) =>
      navigate(`~/profiles/${event.datum.id}`),
    [navigate]
  );

  bus.emit("renders", "ProfilesTable");

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
            header: strings.profiles.fields.id,
            sortable: true,
            search: true,
            primary: true,
            render(data: ID) {
              return (
                <ProfileProvider id={data.id}>
                  <Text>
                    <ProfileIDComponent />
                  </Text>
                </ProfileProvider>
              );
            },
          },
          {
            property: "value.name.first",
            header: strings.profiles.fields.name.first,
            sortable: true,
            search: true,
            render(data: ID) {
              return (
                <ProfileProvider id={data.id}>
                  <Text>
                    <ProfileFirstNameComponent />
                  </Text>
                </ProfileProvider>
              );
            },
          },
          {
            property: "value.name.last",
            header: strings.profiles.fields.name.last,
            sortable: true,
            search: true,
            render(data: ID) {
              return (
                <ProfileProvider id={data.id}>
                  <Text>
                    <ProfileLastNameComponent />
                  </Text>
                </ProfileProvider>
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
                    bus.emit("profiles", { type: "delete", id: data.id })
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
