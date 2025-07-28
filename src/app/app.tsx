import { type JSX, Box, CircularProgress } from "@/theme";
import { lazy, Suspense } from "react";
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
        <Box justify="center" align="center" fill>
          <CircularProgress aria-label="loading" />
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
