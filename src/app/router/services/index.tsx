import { ServiceProvider } from "@/services";
import { Box, type JSX, Route, Router, WSwitch } from "@/theme";
import { lazy } from "@/utils";

const ServicesScreen = lazy(async () => ({
  default: (await import("./services")).ServicesScreen,
}));
const ServiceScreen = lazy(async () => ({
  default: (await import("./service")).ServiceScreen,
}));

export function ServicesRouter(): JSX.Element {
  return (
    <Router base="/services">
      <WSwitch>
        <Route path="/:id">
          {(params) => (
            <ServiceProvider id={params.id}>
              <Box animation="fadeIn" fill>
                <ServiceScreen />
              </Box>
            </ServiceProvider>
          )}
        </Route>
        <Route>
          <Box animation="fadeIn" fill>
            <ServicesScreen />
          </Box>
        </Route>
      </WSwitch>
    </Router>
  );
}
