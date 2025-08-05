import { useStrings } from "@/localizations";
import { Button, type JSX, Card } from "@/theme";
import { useCallback, useLocation } from "@/utils";

export function HomeScreen(): JSX.Element {
  const [, navigate] = useLocation();
  const strings = useStrings();
  const goToProfiles = useCallback(() => navigate("/profiles"), [navigate]);
  const goToProjects = useCallback(() => navigate("/projects"), [navigate]);

  return (
    <Card justify="center" align="center" gap="small" fill>
      <Button
        onClick={goToProfiles}
        label={strings.home.actions.go_to_profiles}
      />
      <Button
        onClick={goToProjects}
        label={strings.home.actions.go_to_projects}
      />
    </Card>
  );
}
