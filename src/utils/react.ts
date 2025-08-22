import { createRoot, type Container, type RootOptions } from "react-dom/client";

/**
 * Re-exports the most used functions from `react`.
 */
export {
  useCallback,
  useEffect,
  createContext,
  use as useContext,
  useMemo,
  lazy,
  memo,
} from "react";

/**
 * Renders a React node into a container.
 * @param container The container to render into.
 * @param children The node to render.
 * @param options The options for the root.
 */
export function render(
  container: Container,
  children: React.ReactNode,
  options?: RootOptions
): void {
  createRoot(container, options).render(children);
}
