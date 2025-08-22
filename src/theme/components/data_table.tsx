import { DataTable as DT, type DataTableProps } from "grommet";

import { type JSX, ThemeContext } from "@/theme";

/**
 * A wrapper around the `grommet` `DataTable` component that extends the theme to set the border color to white.
 * @param props The props for the `DataTable` component.
 * @returns The `DataTable` component with the extended theme.
 */
export function DataTable(props: DataTableProps): JSX.Element {
  return (
    <ThemeContext.Extend value={{ global: { colors: { border: "white" } } }}>
      <DT {...props} />
    </ThemeContext.Extend>
  );
}
