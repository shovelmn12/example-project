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
const ProfilesRouter = lazy(async () => ({
  default: (await import("./profiles")).ProfilesRouter,
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
        <Route path="/profiles/*?">
          <ProfilesRouter />
        </Route>
        <Route path="/">
          <Box animation="fadeIn" fill>
            <HomeScreen />
          </Box>
        </Route>
      </WSwitch>
    </Box>
  );
}
