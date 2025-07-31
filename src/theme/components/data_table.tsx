import { DataTable as DT, type DataTableProps } from "grommet";

import { type JSX, ThemeContext } from "@/theme";

export function DataTable(props: DataTableProps): JSX.Element {
  return (
    <ThemeContext.Extend value={{ global: { colors: { border: "white" } } }}>
      <DT {...props} />
    </ThemeContext.Extend>
  );
}
