import {
  Box,
  DataTable,
  type DataTableColumns,
  Spinner,
  Text,
  type JSX,
} from "@/theme";
import { Suspense } from "@/utils";
import { useServiceBloc, useServicesIds } from "@/services";
import { useStrings } from "@/localizations";
import { type Service, type ServiceID } from "@/services/models";

function ServiceData() {
  const bloc = useServiceBloc();
  // We will need to implement a selector for the service name and description
  return <Text>{bloc.state.value.name}</Text>;
}

function ServiceRow({ id }: { readonly id: ServiceID }) {
  // We will need to implement the ServiceProvider for a single service
  return (
    <Suspense fallback={<Spinner />}>
      <ServiceData />
    </Suspense>
  );
}

export function ServicesTable(): JSX.Element {
  const ids = useServicesIds();
  const strings = useStrings();

  const columns: DataTableColumns<Service> = [
    {
      property: "id",
      header: strings.services.fields.id,
    },
    {
      property: "name",
      header: strings.services.fields.name,
    },
    {
      property: "description",
      header: strings.services.fields.description,
    },
  ];

  return (
    <Box>
      <DataTable
        columns={columns}
        data={ids.map((id) => ({ id }))}
        primaryKey="id"
      />
    </Box>
  );
}
