import { App } from "@/app";
import { EventsBusProvider } from "@/events";
import { LoggerSync } from "@/logger";
import { Grommet, caludeTheme, StrictMode, createRoot } from "@/theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Grommet theme={caludeTheme} themeMode="auto" full>
      <EventsBusProvider>
        <LoggerSync>
          <App />
        </LoggerSync>
      </EventsBusProvider>
    </Grommet>
  </StrictMode>
);
