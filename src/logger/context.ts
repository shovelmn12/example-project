/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from "@/utils";

export interface Logger {
  readonly debug: (...data: any[]) => void;
  readonly info: (...data: any[]) => void;
  readonly warn: (...data: any[]) => void;
  readonly error: (...data: any[]) => void;
}

export const LoggerContext = createContext<Logger>({
  debug: (...data: any[]) => console.debug(...data),
  info: (...data: any[]) => console.info(...data),
  warn: (...data: any[]) => console.warn(...data),
  error: (...data: any[]) => console.error(...data),
});
