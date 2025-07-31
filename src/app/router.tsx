import { WSwitch, Route, type JSX, Box } from "@/theme";
import { lazy } from "@/utils";
import { useIsFirebaseInitialized } from "@/firebase";

const HomeScreen = lazy(async () => ({
  default: (await import("./home")).HomeScreen,
}));
const UsersScreen = lazy(async () => ({
  default: (await import("./users")).UsersScreen,
}));

export function Router(): JSX.Element {
  const isInit = useIsFirebaseInitialized();

  return (
    <>
      {isInit && (
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
      )}
    </>
  );
}
