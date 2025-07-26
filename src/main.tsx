import { App } from "@/app";
import { EventsBusProvider } from "@/events";
import { LoggerSync } from "@/logger";
import { StrictMode, createRoot } from "@/theme";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EventsBusProvider>
      <LoggerSync>
        <App />
      </LoggerSync>
    </EventsBusProvider>
  </StrictMode>
);
