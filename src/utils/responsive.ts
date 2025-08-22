import { ResponsiveContext } from "grommet";

import { useContext } from ".";

/**
 * A hook that returns the current responsive size.
 * @returns The current responsive size (e.g., "small", "medium", "large").
 */
export function useResponsive(): string {
  return useContext(ResponsiveContext);
}
