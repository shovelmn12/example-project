import {
  Button,
  Data,
  DataTable,
  DataTableColumns,
  Toolbar,
  type JSX,
} from "@/theme";
import { useProfilesList } from "../hooks";
import { useMemo } from "react";
import { useEventsBus } from "@/events";
import { Trash } from "grommet-icons";
import { useStrings } from "@/localizations";

export function ProfilesTable(): JSX.Element {
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
