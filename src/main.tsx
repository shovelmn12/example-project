import { App } from "@/app";
import { EventsBusProvider } from "@/events";
import { LoggerSync } from "@/logger";
import { Grommet, myTheme as theme, StrictMode } from "@/theme";
import { render } from "@/utils";

render(
  document.getElementById("root")!,
  <StrictMode>
    <Grommet theme={theme} themeMode="auto" full>
      <EventsBusProvider>
        <LoggerSync>
          <App />
        </LoggerSync>
      </EventsBusProvider>
    </Grommet>
  </StrictMode>
);
