import { ServiceNameComponent } from "@/services";
import { Page, PageContent, Text, type JSX } from "@/theme";

/**
 * The service screen.
 * @returns The `ServiceScreen` component.
 */
export function ServiceScreen(): JSX.Element {
  return (
    <Page fill>
      <PageContent justify="center" align="center" fill>
        <Text>
          <ServiceNameComponent />
        </Text>
      </PageContent>
    </Page>
  );
}
