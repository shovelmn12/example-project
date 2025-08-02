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

import { useProfilesList, type ProfileState } from "..";

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
