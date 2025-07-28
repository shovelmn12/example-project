import { App } from "@/app";
import { EventsBusProvider } from "@/events";
import { LoggerSync } from "@/logger";
import { HeroUIProvider, StrictMode, createRoot } from "@/theme";
import "@/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroUIProvider>
      <main className="dark">
        <EventsBusProvider>
          <LoggerSync>
            <App />
          </LoggerSync>
        </EventsBusProvider>
      </main>
    </HeroUIProvider>
  </StrictMode>
);
