import { WSwitch, Route, type JSX, Box, Spinner, Suspense } from "@/theme";
import { lazy } from "@/utils";
import { useIsAuth } from "@/authentication";

import { useIsAppInit, Header } from "..";

const AuthScreen = lazy(async () => ({
  default: (await import("./auth")).AuthScreen,
}));
const HomeScreen = lazy(async () => ({
  default: (await import("./home")).HomeScreen,
}));
const SettingsScreen = lazy(async () => ({
  default: (await import("./settings")).SettingsScreen,
}));
const ProfilesRouter = lazy(async () => ({
  default: (await import("./profiles")).ProfilesRouter,
}));
const ProjectsRouter = lazy(async () => ({
  default: (await import("./projects")).ProjectsRouter,
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
          <Suspense
            fallback={
              <Box justify="center" align="center" animation="pulse" fill>
                <Spinner />
              </Box>
            }
          >
            <ProfilesRouter />
          </Suspense>
        </Route>
        <Route path="/projects/*?">
          <Suspense
            fallback={
              <Box justify="center" align="center" animation="pulse" fill>
                <Spinner />
              </Box>
            }
          >
            <ProjectsRouter />
          </Suspense>
        </Route>
        <Route path="/settings">
          <Suspense
            fallback={
              <Box justify="center" align="center" animation="pulse" fill>
                <Spinner />
              </Box>
            }
          >
            <Box animation="fadeIn" fill>
              <SettingsScreen />
            </Box>
          </Suspense>
        </Route>
        <Route>
          <Suspense
            fallback={
              <Box justify="center" align="center" animation="pulse" fill>
                <Spinner />
              </Box>
            }
          >
            <Box animation="fadeIn" fill>
              <HomeScreen />
            </Box>
          </Suspense>
        </Route>
      </WSwitch>
    </Box>
  );
}
