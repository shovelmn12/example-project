/**
 * @fileoverview This file contains all the themes for the application.
 * It exports the default grommet theme, the hpe theme, and several custom themes.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { generate, type ThemeType } from "grommet";

import { deepMerge } from "@/utils";

// --- 1. FOUNDATION ---
// Generate the base theme using a 16px spacing unit to align with an 8px grid.
const baseTheme: ThemeType = generate(16);

/**
 * A custom theme for the application.
 */
export const aTheme: ThemeType = {
// --- 2. SHADCN-LIKE OVERRIDES ---
// This object contains all the specific changes to map the shadcn aesthetic
// onto the existing Grommet theme structure, now with the latest official colors.
const shadcnTheme: ThemeType = {
  global: {
    colors: {
      // Mapping shadcn's color variables to Grommet's theme tokens.
      brand: {
        dark: "#e8e8e8", // --primary (dark)
        light: "#272727", // --primary (light)
      },
      focus: {
        dark: "#8e8e8e", // --ring (dark)
        light: "#b5b5b5", // --ring (light)
      },
      "background-front": {
        // For surfaces like Cards, Layers, etc. (--card)
        dark: "#272727",
        light: "#FFFFFF",
      },
      "background-back": {
        // For the main page background (--background)
        dark: "#1d1d1d",
        light: "#FFFFFF",
      },
      "background-contrast": {
        // Used for hover, etc. (--accent)
        dark: "#363636",
        light: "#f7f7f7",
      },
      text: {
        // --foreground
        dark: "#fbfbfb",
        light: "#1d1d1d",
      },
      border: {
        dark: "rgba(255, 255, 255, 0.1)", // --border (dark)
        light: "#e5e5e5", // --border (light)
      },
      control: "brand",
      "active-background": "background-contrast",
      "status-critical": {
        // --destructive
        dark: "#e5484d",
        light: "#ef4444",
      },
      // Graph colors
      "graph-0": { dark: "#7b59ce", light: "#d97706" }, // --chart-1
      "graph-1": { dark: "#4fb1a1", light: "#0ea5e9" }, // --chart-2
      "graph-2": { dark: "#f59e0b", light: "#581c87" }, // --chart-3
    },
    font: {
      family:
        "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      size: "14px", // Base font size
      height: "20px",
    },
    focus: {
      // Modern, accessible focus ring using an offset outline.
      border: {
        color: "transparent",
      },
      shadow: undefined,
      outline: {
        color: "focus",
        size: "2px",
        offset: "2px",
      },
    },
    control: {
      border: {
        radius: "10px", // --radius: 0.625rem = 10px
        width: "1px",
      },
    },
    input: {
      padding: "12px",
    },
  },
  button: {
    background: "brand",
    border: {
      radius: "8px",
      width: "1px",
      color: "transparent",
    },
    color: { dark: "#272727", light: "#fbfbfb" },
    elevation: "xsmall", // This adds the 'shadow-xs' effect.
    hover: {
      default: {
        background: {
          color: { dark: "#f2f2f2", light: "#171717e6" },
          opacity: "strong",
        },
      },
      secondary: {
        background: {
          color: {
            dark: "oklch(0.97 0 0 / 8)",
            light: "#f5f5f5cc",
          },
          opacity: "strong",
        },
      },
    },
    disabled: {
      opacity: 0.5,
    },
  },
  formField: {
    border: {
      color: "border",
      side: "all",
      size: "1px",
    },
    label: {
      margin: { vertical: "small", horizontal: "0" },
      weight: 500,
    },
    round: "0.5rem",
    focus: {
      border: {
        color: "focus",
      },
    },
  },
  checkBox: {
    check: {
      radius: "4px",
    },
    toggle: {
      radius: "24px",
      color: {
        dark: "white",
        light: "brand",
      },
    },
  },
  layer: {
    background: "background-front",
    border: {
      radius: "0.75rem",
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.8)",
    },
  },
  heading: {
    font: {
      family: "'Geist', sans-serif",
    },
    weight: 600,
  },
  icon: {
    matchSize: true,
  },
};

/**
 * A second theme that follows the shadcn design system.
 */
export const shadcnTheme2: ThemeType = {
  global: {
    colors: {
      background: {
        light: "oklch(1 0 0)",
        dark: "oklch(0.145 0 0)",
      },
      "background-front": {
        light: "oklch(1 0 0)",
        dark: "oklch(0.205 0 0)", // --card
      },
      "background-back": {
        light: "oklch(1 0 0)",
        dark: "oklch(0.145 0 0)",
      },
      text: {
        light: "oklch(0.145 0 0)",
        dark: "oklch(0.985 0 0)",
      },
      "text-weak": {
        light: "oklch(0.556 0 0)", // --muted-foreground
        dark: "oklch(0.708 0 0)",
      },
      brand: {
        light: "oklch(0.205 0 0)", // --primary
        dark: "oklch(0.922 0 0)",
      },
      border: {
        light: "oklch(0.922 0 0)",
        dark: "oklch(1 0 0 / 10%)",
      },
      control: "brand",
      focus: {
        light: "oklch(0.708 0 0)", // --ring
        dark: "oklch(0.556 0 0)",
      },
      "accent-1": {
        light: "oklch(0.97 0 0)", // --accent
        dark: "oklch(0.269 0 0)",
      },
      "status-critical": {
        light: "oklch(0.577 0.245 27.325)", // --destructive
        dark: "oklch(0.704 0.191 22.216)",
      },
      // This is for the input field background
      "input-background": {
        light: "oklch(0.922 0 0)", // --input
        dark: "oklch(1 0 0 / 15%)",
      },
    },
    font: {
      family:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      size: "16px",
      height: "1.5rem",
    },
    hover: {
      background: { color: "accent-1" },
      color: {
        light: "oklch(0.205 0 0)", // --accent-foreground
        dark: "oklch(0.985 0 0)",
      },
    },
    elevation: {
      light: {
        small:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      },
      dark: {
        small:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      },
    },
    input: {
      padding: {
        vertical: "8px",
        horizontal: "12px",
      },
    },
  },
  button: {
    border: {
      radius: "0.625rem",
      width: "0px",
    },
    padding: {
      vertical: "10px",
      horizontal: "16px",
    default: {
      background: "brand",
      border: { color: "border" },
      color: "text",
      elevation: "none",
      font: {
        size: "medium",
        weight: 500,
      },
    },
    primary: {
      background: "brand",
      border: { color: "brand" },
      color: { dark: "#272727", light: "#fbfbfb" },
      elevation: "none",
      font: {
        size: "medium",
        weight: 500,
      },
    },
    secondary: {
      background: "oklch(0.97 0 0)",
      border: { color: "border" },
      color: "oklch(0.205 0 0)",
      elevation: "none",
      font: {
        size: "medium",
        weight: 500,
      },
    },
    size: {
      small: {
        border: { radius: "8px" },
        pad: { vertical: "6px", horizontal: "12px" },
      },
      medium: {
        border: { radius: "8px" },
        pad: { vertical: "8px", horizontal: "16px" },
        iconOnly: { pad: "8px" },
      },
      large: {
        border: { radius: "8px" },
        pad: { vertical: "8px", horizontal: "24px" },
      },
    },
  },
  card: {
    container: {
      elevation: "none", // shadow-sm
      background: "background-front",
      border: { side: "all", color: "border", size: "1px" },
      round: "14px", // rounded-xl
    },
    header: {
      // Creates the 'py-6' and horizontal padding
      pad: { top: "medium", horizontal: "medium" },
    },
    body: {
      // Creates the 'gap-6' and horizontal padding
      pad: { vertical: "medium", horizontal: "medium" },
    },
    footer: {
      // Creates the 'py-6' and horizontal padding
      pad: { bottom: "medium", horizontal: "medium" },
    },
  },
  formField: {
    border: {
      color: "border",
      side: "all",
    },
    label: {
      color: "text-weak",
      margin: { bottom: "small" },
    },
    round: "4px",
  },
  textInput: {
    extend: () => `
      background-color: #333333;
      color: #FFFFFF;
      &::placeholder {
        color: #8C8C8C;
      }
    `,
  },
};

/**
 * A theme for testing purposes.
 */
export const testTheme: ThemeType = {
  global: {
    colors: {
      brand: {
        dark: "#7700cc",
        light: "#6600cc",
      },
      background: {
        dark: "#111111",
        light: "#FFFFFF",
      },
      "background-back": {
        dark: "#111111",
        light: "#EEEEEE",
      },
      "background-front": {
        dark: "#222222",
        light: "#FFFFFF",
      },
      "background-contrast": {
        dark: "#FFFFFF11",
        light: "#11111111",
      },
      text: {
        dark: "#EEEEEE",
        light: "#333333",
      },
      "text-strong": {
        dark: "#FFFFFF",
        light: "#000000",
      },
      "text-weak": {
        dark: "#CCCCCC",
        light: "#444444",
      side: "all", // Use a full box border instead of just the bottom
      color: {
        // --input color for dark mode is different from the border color
        dark: "rgba(255, 255, 255, 0.15)",
        light: "#e8e8e8",
      },
      size: "1px",
      // For when an error occurs
      error: {
        color: "status-critical",
      },
    },
    content: {
      pad: "small",
    },
    round: "10px",
    // On focus, the border color will change to our focus/ring color.
    focus: {
      border: {
        color: "focus",
      },
    },
    label: {
      margin: {
        vertical: "xsmall",
        horizontal: "none",
      },
    },
  },
  heading: {
    weight: 600, // A solid weight for headings
    level: {
      // Adjusting font sizes to create a modern, clean type scale
      "1": {
        medium: { size: "36px", height: "44px" },
      },
      "2": {
        medium: { size: "30px", height: "38px" },
      },
      "3": {
        medium: { size: "24px", height: "32px" },
      },
      "4": {
        medium: { size: "20px", height: "28px" },
      },
    },
  },
  layer: {
    background: "background-front",
    border: {
      radius: "10px",
    },
    container: {
      elevation: "none",
      // extend: ({ theme }: LayerProps & { theme: ThemeType & {dark:boolean} }) => `
      //   border: 1px solid ${
      //     theme.global?.colors?.border?.[theme.dark ? "dark" : "light"] ?? ''
      //   };
      // `,
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.6)",
    },
  },
};

// --- 3. FINAL THEME ---
// Merge our overrides with the generated base theme.
export const theme: ThemeType = deepMerge(baseTheme, shadcnTheme);
