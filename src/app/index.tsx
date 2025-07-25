import { WSwitch, Route, type JSX, Box, Meter } from "@/theme";
import { Providers } from "./providers";
import { UsersSync } from "@/users";
import { lazy, Suspense } from "react";

const HomeScreen = lazy(async () => ({
  default: (await import("./home")).HomeScreen,
}));
const UsersScreen = lazy(async () => ({
  default: (await import("./users")).UsersScreen,
}));

export function App(): JSX.Element {
  return (
    <Providers>
      <UsersSync>
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
      </UsersSync>
    </Providers>
  );
}
