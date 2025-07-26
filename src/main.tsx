import { App } from "@/app";
import { EventsBusProvider } from "@/events";
import { LoggerSync } from "@/logger";
import { HeroUIProvider, StrictMode, createRoot } from "@/theme";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroUIProvider>
      <EventsBusProvider>
        <LoggerSync>
          <App />
        </LoggerSync>
      </EventsBusProvider>
    </HeroUIProvider>
  </StrictMode>
);
