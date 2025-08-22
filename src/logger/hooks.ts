import { useContext } from "@/utils";

import { LoggerContext, type Logger } from "./context";

/**
 * A hook to get the logger.
 * @returns The logger.
 */
export function useLogger(): Logger {
  return useContext(LoggerContext);
}
