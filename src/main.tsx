import { App } from "@/app";
import { EventsBusProvider } from "@/events";
import { LoggerSync } from "@/logger";
import { StrictMode } from "@/theme";
import { render } from "@/utils";

render(
  document.getElementById("root")!,
  <StrictMode>
    <EventsBusProvider>
      <LoggerSync>
        <App />
      </LoggerSync>
    </EventsBusProvider>
  </StrictMode>
);
