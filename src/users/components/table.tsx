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
import { Trash } from "lucide-react";
import { useEventsBus } from "@/events";

export function UsersTable(): JSX.Element {
  const bus = useEventsBus();
  const users = useUsersList();
  const data = useMemo(
    () =>
      users.map((user) => ({
        ...user,
        actions: (
          <Button
            icon={<Trash size="16px" />}
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
            header: "ID",
            sortable: true,
            search: true,
          },
          {
            property: "email",
            header: "EMAIL",
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
