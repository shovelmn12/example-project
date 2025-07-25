import { WSwitch, Route, type JSX, Box, Meter } from "@/theme";
import { Providers } from "./providers";
import { lazy, Suspense } from "react";
import { Syncs } from "./sync";
import { useIsFirebaseInitialized } from "@/firebase";

const HomeScreen = lazy(async () => ({
  default: (await import("./home")).HomeScreen,
}));
const UsersScreen = lazy(async () => ({
  default: (await import("./users")).UsersScreen,
}));

export function App(): JSX.Element {
  const isInit = useIsFirebaseInitialized();

  console.log("is init", isInit);

  return (
    <Providers>
      <Syncs>
        {isInit && (
          <Suspense
            fallback={
              <Box justify="center" align="center" animation="pulse" fill>
                <Meter type="circle" size="small" color="brand" round />
              </Box>
            }
          >
            <WSwitch>
              <Route
                path="/users"
                component={() => (
                  <Box animation="fadeIn" fill>
                    <UsersScreen />
                  </Box>
                )}
              />
              <Route
                component={() => (
                  <Box animation="fadeIn" fill>
                    <HomeScreen />
                  </Box>
                )}
              />
            </WSwitch>
          </Suspense>
        )}
      </Syncs>
    </Providers>
  );
}
