import { Box, Heading, type JSX } from "@/theme";
import {
  CreateService,
  ServicesCount,
  ServicesTable,
} from "@/services/components";
import { useStrings } from "@/localizations";

export function ServicesPage(): JSX.Element {
  const strings = useStrings();
  return (
    <Box gap="medium">
      <Heading>{strings.services.count}</Heading>
      <ServicesCount />
      <CreateService />
      <ServicesTable />
    </Box>
  );
}
