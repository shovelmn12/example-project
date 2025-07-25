import { useContext } from "@/utils";
import { LoggerContext, type Logger } from "./context";

export function useLogger(): Logger {
  return useContext(LoggerContext);
}
