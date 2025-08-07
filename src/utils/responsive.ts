import { ResponsiveContext } from "grommet";

import { useContext } from ".";

export function useResponsive(): string {
  return useContext(ResponsiveContext);
}
