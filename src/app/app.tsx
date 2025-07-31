import { type JSX, Box, Meter, Suspense } from "@/theme";
import { lazy } from "@/utils";
import { useIsFirebaseInitialized } from "@/firebase";

import { Providers } from "./providers";
import { Syncs } from "./sync";

const Router = lazy(async () => ({
  default: (await import("./router")).Router,
}));

export function App(): JSX.Element {
  return (
    <Wrapper>
      <Container>
        <Router />
      </Container>
    </Wrapper>
  );
}

function Container({ children }: React.PropsWithChildren): JSX.Element {
  const isInit = useIsFirebaseInitialized();

  return (
    <Suspense
      fallback={
        <Box justify="center" align="center" animation="pulse" fill>
          <Meter type="circle" size="small" color="brand" round />
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
