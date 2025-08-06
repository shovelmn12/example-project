import { App } from "@/app";
import { LoggerSync } from "@/logger";
import { StrictMode } from "@/theme";
import { render } from "@/utils";

render(
  document.getElementById("root")!,
  <StrictMode>
    <LoggerSync>
      <App />
    </LoggerSync>
  </StrictMode>
);
