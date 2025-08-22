/**
 * @fileoverview Re-exports all the components.
 */
export {
  Box,
  Text,
  Button,
  Data,
  DataTableColumns,
  ThemeContext,
  Toolbar,
  Meter,
  Spinner,
  Grommet,
  Card,
  Header,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  Stack,
  Select,
  Page,
  PageHeader,
  PageContent,
  Main,
  Layer,
  Menu,
  Avatar,
  type MouseClick,
  type KeyPress,
} from "grommet";
export { Switch as WSwitch, Route, Router } from "wouter";
export { StrictMode, type JSX, Suspense } from "react";
export * from "./data_table";
export * from "./switch";
export * from "./google_button";

/**
 * The props for the children of the `Menu` component.
 */
export interface MenuChildrenProps {
  /**
   * Whether the menu is disabled.
   */
  readonly disabled: boolean;
  /**
   * Whether the menu is in a drop.
   */
  readonly drop: boolean;
  /**
   * Whether the menu is being hovered over.
   */
  readonly hover: boolean;
}
