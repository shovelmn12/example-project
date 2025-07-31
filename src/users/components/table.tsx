import {
  Button,
  Data,
  DataTable,
  DataTableColumns,
  Toolbar,
  type JSX,
} from "@/theme";
import { useUsersList } from "../hooks";
import { useMemo } from "react";
import { useEventsBus } from "@/events";
import { Trash } from "grommet-icons";
import { useStrings } from "@/localizations";

export function UsersTable(): JSX.Element {
  const bus = useEventsBus();
  const strings = useStrings();
  const users = useUsersList();
  const data = useMemo(
    () =>
      users.map((user) => ({
        ...user,
        actions: (
          <Button
            icon={<Trash />}
            onClick={() => bus.emit("users", { type: "delete", id: user.id })}
          />
        ),
      })),
    [users, bus]
  );

  bus.emit("renders", "UsersTable");

  return (
    <Data data={data} gap="medium">
      <Toolbar>
        <DataTableColumns options={["id", "email"]} drop />
      </Toolbar>
      <DataTable
        columns={[
          {
            property: "id",
            header: strings.users.fields.id,
            sortable: true,
            search: true,
          },
          {
            property: "email",
            header: strings.users.fields.email,
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
