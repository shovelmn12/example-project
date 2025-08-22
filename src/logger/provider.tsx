import { type JSX } from "@/theme";

import { LoggerContext, type Logger } from "./context";

/**
 * A provider for the logger.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @param props.value The logger to provide.
 * @returns The logger provider.
 */
export function LoggerProvider({
  children,
  value,
}: React.PropsWithChildren<{ value: Logger }>): JSX.Element {
  return (
    <LoggerContext.Provider value={value}>{children}</LoggerContext.Provider>
  );
}
