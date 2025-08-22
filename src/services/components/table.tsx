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
  ServiceIDComponent,
  ServiceNameComponent,
  ServiceProvider,
  useServicesIDs,
} from "..";

/**
 * The ID of a service.
 */
interface ID {
  /**
   * The ID of the service.
   */
  readonly id: string;
}

/**
 * A table of services.
 * @returns The `ServicesTable` component.
 */
export function ServicesTable(): JSX.Element {
  const [, navigate] = useLocation();
  const bus = useEventsBus();
  const strings = useStrings();
  const ids = useServicesIDs();
  const data: ID[] = useMemo(
    () =>
      ids.map((id) => ({
        id,
      })),
    [ids]
  );
  const onRowClick = useCallback(
    (event: MouseClick<ID> | KeyPress<ID>) =>
      navigate(`~/services/${event.datum.id}`),
    [navigate]
  );

  return (
    <Data data={data} gap="medium">
      <Toolbar>
        <DataTableColumns
          options={["value.id", "value.name", "value.name"]}
          drop
        />
      </Toolbar>
      <DataTable
        onClickRow={onRowClick}
        columns={useMemo(
          () => [
            {
              property: "value.id",
              header: strings.services.fields.id,
              sortable: true,
              search: true,
              primary: true,
              render(data: ID) {
                return (
                  <ServiceProvider id={data.id}>
                    <Text>
                      <ServiceIDComponent />
                    </Text>
                  </ServiceProvider>
                );
              },
            },
            {
              property: "value.name",
              header: strings.services.fields.name,
              sortable: true,
              search: true,
              render(data: ID) {
                return (
                  <ServiceProvider id={data.id}>
                    <Text>
                      <ServiceNameComponent />
                    </Text>
                  </ServiceProvider>
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
                      bus.emit("services", { type: "delete", id: data.id })
                    }
                  />
                );
              },
            },
          ],
          [strings, bus]
        )}
        resizeable
      />
    </Data>
  );
}
