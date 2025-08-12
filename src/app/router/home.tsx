import { useStrings } from "@/localizations";
import { Button, type JSX, Page, PageContent } from "@/theme";
import { none, type Option, some, useCallback, useLocation } from "@/utils";
import { useEffect, useState } from "react";

export function HomeScreen(): JSX.Element {
  const [, navigate] = useLocation();
  const strings = useStrings();
  const goToProfiles = useCallback(() => navigate("/profiles"), [navigate]);
  const goToProjects = useCallback(() => navigate("/projects"), [navigate]);

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
        />
        <WebTransportButton />
      </PageContent>
    </Page>
  );
}

function WebTransportButton(): JSX.Element {
  const [wt, setWt] = useState<Option<WebTransport>>(none);
  const onClick = useCallback(() => {
    try {
      setWt(some(new WebTransport("https://[::1]:4433")));
    } catch (e) {
      console.error(e);
      setWt(none);
    }
  }, [setWt]);

  useEffect(() => {
    if (wt._tag === "None") {
      return;
    }

    const client = wt.value;

    client.ready
      .then(() => console.log("READY"))
      .catch((e) => {
        console.error(e);
        setWt(none);
      });

    return () => client.close();
  }, [wt, setWt]);

  console.log(wt);

  return <Button label="Connect" onClick={onClick} />;
}
