import { useStrings } from "@/localizations";
import { Card, Page, PageContent, Text, type JSX } from "@/theme";
import { CreateService, ServicesCount, ServicesTable } from "@/services";

/**
 * The services screen.
 * @returns The `ServicesScreen` component.
 */
export function ServicesScreen(): JSX.Element {
  const strings = useStrings();

  return (
    <Page fill>
      <PageContent justify="center" align="center" fill>
        <Card
          pad="medium"
          justify="center"
          align="center"
          gap="medium"
          width={{ min: "medium" }}
          height={{ min: "small" }}
          overflow="auto"
        >
          <CreateService />
          <Text size="xsmall">
            {strings.services.count}: <ServicesCount />
          </Text>
          <ServicesTable />
        </Card>
      </PageContent>
    </Page>
  );
}
