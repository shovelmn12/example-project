/**
 * @fileoverview This file contains all the themes for the application.
 * It exports the default grommet theme, the hpe theme, and several custom themes.
 */
import { generate, type ThemeType } from "grommet";

import { deepMerge } from "@/utils";

// --- 1. FOUNDATION ---
// Generate the base theme using a 16px spacing unit to align with an 8px grid.
const baseTheme: ThemeType = generate(16);

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
