import { ProfileProvider } from "@/profiles";
import { Box, type JSX, Route, Router, WSwitch } from "@/theme";
import { lazy } from "@/utils";

const ProfilesScreen = lazy(async () => ({
  default: (await import("./profiles")).ProfilesScreen,
}));
const ProfileScreen = lazy(async () => ({
  default: (await import("./profile")).ProfileScreen,
}));

/**
 * The router for the profiles feature.
 * @returns The `ProfilesRouter` component.
 */
export function ProfilesRouter(): JSX.Element {
  return (
    <Router base="/profiles">
      <WSwitch>
        <Route path="/:id">
          {(params) => (
            <ProfileProvider id={params.id}>
              <Box animation="fadeIn" fill>
                <ProfileScreen />
              </Box>
            </ProfileProvider>
          )}
        </Route>
        <Route>
          <Box animation="fadeIn" fill>
            <ProfilesScreen />
          </Box>
        </Route>
      </WSwitch>
    </Router>
  );
}
