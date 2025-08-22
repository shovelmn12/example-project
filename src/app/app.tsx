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

/**
 * The main application component.
 * @returns The `App` component.
 */
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

/**
 * A container component that displays a spinner while the app is initializing.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @returns The `Container` component.
 */
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

/**
 * A wrapper component that provides the app with the necessary providers and syncs.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @returns The `Wrapper` component.
 */
function Wrapper({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <Providers>
      <Syncs>{children}</Syncs>
    </Providers>
  );
}
