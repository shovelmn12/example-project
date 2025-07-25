import { LoggerContext, type Logger } from "./context";

export function LoggerProvider({
  children,
  value,
}: React.PropsWithChildren<{ value: Logger }>): JSX.Element {
  return (
    <LoggerContext.Provider value={value}>{children}</LoggerContext.Provider>
  );
}
