import {
  Box,
  DataTable,
  type DataTableColumns,
  type JSX,
} from "@/theme";
import { useServices } from "@/services";
import { useStrings } from "@/localizations";
import { type Service } from "@/services/models";

export function ServicesTable(): JSX.Element {
  const services = useServices();
  const strings = useStrings();

  const columns: DataTableColumns<Service> = [
    {
      property: "id",
      header: strings.services.fields.id,
      primary: true,
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
        data={services}
        primaryKey="id"
      />
    </Box>
  );
}
