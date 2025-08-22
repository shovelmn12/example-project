import { useStrings } from "@/localizations";
import { Button, type JSX, Page, PageContent } from "@/theme";
import { useCallback, useLocation } from "@/utils";

/**
 * The home screen.
 * @returns The `HomeScreen` component.
 */
export function HomeScreen(): JSX.Element {
  const [, navigate] = useLocation();
  const strings = useStrings();
  const goToProfiles = useCallback(() => navigate("/profiles"), [navigate]);
  const goToProjects = useCallback(() => navigate("/projects"), [navigate]);
  const goToServices = useCallback(() => navigate("/services"), [navigate]);

  return (
    <Page fill>
      <PageContent justify="center" align="center" gap="small" fill>
        <Button
          onClick={goToProfiles}
          label={strings.home.actions.go_to_profiles}
        />
        <Button
          onClick={goToProjects}
          label={strings.home.actions.go_to_projects}
          secondary
        />
        <Button
          onClick={goToServices}
          label={strings.home.actions.go_to_services}
        />
      </PageContent>
    </Page>
  );
}
