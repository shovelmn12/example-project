/**
 * @fileoverview The entry point of the application.
 */
import { App } from "@/app";
import { StrictMode } from "@/theme";
import { render } from "@/utils";

render(
  document.getElementById("root")!,
  <StrictMode>
    <App />
  </StrictMode>
);
