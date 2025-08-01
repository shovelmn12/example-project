import { WSwitch, Route, type JSX, Box, Spinner } from "@/theme";
import { lazy } from "@/utils";
import { useIsAuth } from "@/authentication";

import { useIsAppInit, Header } from "..";

const AuthScreen = lazy(async () => ({
  default: (await import("./auth")).AuthScreen,
}));
const HomeScreen = lazy(async () => ({
  default: (await import("./home")).HomeScreen,
}));
const UsersScreen = lazy(async () => ({
  default: (await import("./users")).UsersScreen,
}));

export function Router(): JSX.Element {
  const isInit = useIsAppInit();
  const isAuth = useIsAuth();

  if (!isInit) {
    return (
      <Box justify="center" align="center" fill>
        <Spinner />
      </Box>
    );
  }

  if (!isAuth) {
    return <AuthScreen />;
  }

  return (
    <Box fill>
      <Header />
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
    </Box>
  );
}
