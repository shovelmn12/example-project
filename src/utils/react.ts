import { createRoot, type Container, type RootOptions } from "react-dom/client";

export {
  useCallback,
  useEffect,
  createContext,
  use as useContext,
  useMemo,
  lazy,
} from "react";

export function render(
  container: Container,
  children: React.ReactNode,
  options?: RootOptions
): void {
  createRoot(container, options).render(children);
}
