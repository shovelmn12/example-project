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
  type ProfileState,
} from "..";

export function ProfilesTable(): JSX.Element {
  const [, navigate] = useLocation();
  const bus = useEventsBus();
  const strings = useStrings();
  const ids = useProfilesIDs();
  const data = useMemo(
    () =>
      ids.map((id) => ({
        id,
      })),
    [ids]
  );
  const onRowClick = useCallback(
    (event: MouseClick<ProfileState> | KeyPress<ProfileState>) => {
      const state = event.datum;

      switch (state.type) {
        case "data":
          navigate(`~/profiles/${state.value.id}`);
          break;

        case "error":
        case "loading":
          if (state.value._tag === "Some") {
            navigate(`~/profiles/${state.value.value.id}`);
          }
          break;
      }
    },
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
            render(data: { id: string }) {
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
            render(data: { id: string }) {
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
            render(data: { id: string }) {
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
            render(data: { id: string }) {
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
