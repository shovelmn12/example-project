/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from "@/utils";

/**
 * The logger interface.
 */
export interface Logger {
  /**
   * Logs a debug message.
   * @param data The data to log.
   */
  readonly debug: (...data: any[]) => void;
  /**
   * Logs an info message.
   * @param data The data to log.
   */
  readonly info: (...data: any[]) => void;
  /**
   * Logs a warning message.
   * @param data The data to log.
   */
  readonly warn: (...data: any[]) => void;
  /**
   * Logs an error message.
   * @param data The data to log.
   */
  readonly error: (...data: any[]) => void;
}

/**
 * The logger context.
 */
export const LoggerContext = createContext<Logger>({
  debug: (...data: any[]) => console.debug(...data),
  info: (...data: any[]) => console.info(...data),
  warn: (...data: any[]) => console.warn(...data),
  error: (...data: any[]) => console.error(...data),
});
