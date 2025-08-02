import {
  Button,
  Data,
  DataTable,
  DataTableColumns,
  Toolbar,
  type JSX,
  type MouseClick,
  type KeyPress,
} from "@/theme";
import { useEventsBus } from "@/events";
import { Trash } from "@/theme/icons";
import { useStrings } from "@/localizations";
import { useCallback, useLocation, useMemo } from "@/utils";

import { useProfilesList, type Profile } from "..";

export function ProfilesTable(): JSX.Element {
  const [, navigate] = useLocation();
  const bus = useEventsBus();
  const strings = useStrings();
  const profiles = useProfilesList();
  const data = useMemo(
    () =>
      profiles.map((state) => ({
        ...state,
        actions:
          state.type === "data" ? (
            <Button
              icon={<Trash />}
              onClick={() =>
                bus.emit("profiles", { type: "delete", id: state.value.id })
              }
            />
          ) : (
            <Button icon={<Trash />} disabled />
          ),
      })),
    [profiles, bus]
  );
  const onRowClick = useCallback(
    (event: MouseClick<Profile> | KeyPress<Profile>) =>
      navigate(`/profiles/${event.datum.id}`, { replace: true }),
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
          },
          {
            property: "value.name.first",
            header: strings.profiles.fields.name.first,
            sortable: true,
            search: true,
          },
          {
            property: "value.name.last",
            header: strings.profiles.fields.name.last,
            sortable: true,
            search: true,
          },
          {
            property: "actions",
            header: "",
          },
        ]}
        resizeable
      />
    </Data>
  );
}
