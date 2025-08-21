import {
  type JSX,
  Box,
  Grommet,
  Main,
  Spinner,
  Suspense,
  theme,
} from "@/theme";
import { lazy } from "@/utils";
import { useIsFirebaseInitialized } from "@/firebase";
import { useSettingsThemeMode } from "@/settings";

import { Providers } from "./providers";
import { Syncs } from "./sync";

const Router = lazy(async () => ({
  default: (await import("./router")).Router,
}));

export function App(): JSX.Element {
  return (
    <Grommet theme={theme} themeMode={useSettingsThemeMode()} full>
      <Main fill>
        <Wrapper>
          <Container>
            <Router />
          </Container>
        </Wrapper>
      </Main>
    </Grommet>
  );
}

function Container({ children }: React.PropsWithChildren): JSX.Element {
  const isInit = useIsFirebaseInitialized();

  return (
    <Suspense
      fallback={
        <Box justify="center" align="center" animation="pulse" fill>
          <Spinner />
        </Box>
      }
    >
      {isInit && children}
    </Suspense>
  );
}

function Wrapper({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <Providers>
      <Syncs>{children}</Syncs>
    </Providers>
  );
}
