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

const HASH = new Uint8Array([
  205, 99, 51, 10, 134, 249, 152, 234, 38, 253, 186, 249, 123, 28, 120, 123,
  211, 63, 102, 214, 143, 224, 194, 167, 215, 178, 202, 18, 118, 4, 43, 190,
]);

function WebTransportButton(): JSX.Element {
  const [wt, setWt] = useState<Option<WebTransport>>(none);
  const onClick = useCallback(() => {
    try {
      setWt(
        some(
          new WebTransport("https://[::1]:443", {
            serverCertificateHashes: [
              { algorithm: "sha-256", value: HASH.buffer },
            ],
          })
        )
      );
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
