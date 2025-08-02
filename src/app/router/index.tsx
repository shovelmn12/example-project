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
const ProfilesScreen = lazy(async () => ({
  default: (await import("./profiles")).ProfilesScreen,
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
          path="/profiles"
          component={() => (
            <Box animation="fadeIn" fill>
              <ProfilesScreen />
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
