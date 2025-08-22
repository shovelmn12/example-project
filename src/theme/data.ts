/**
 * @fileoverview This file contains all the themes for the application.
 * It exports the default grommet theme, the hpe theme, and several custom themes.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { generate, type ThemeType } from "grommet";
import { type ExtendProps } from "grommet/themes/base";

import { deepMerge } from "@/utils";

/**
 * Re-exports the `grommet` theme from `grommet/themes`.
 */
export { grommet } from "grommet/themes";
/**
 * Re-exports all the themes from `grommet-theme-hpe`.
 */
export * from "grommet-theme-hpe";

/**
 * A custom theme for the application.
 */
export const aTheme: ThemeType = {
  global: {
    font: {
      family: "Geist",
    },
  },
  icon: {
    size: {
      small: "6px",
      medium: "12px",
      large: "24px",
      xlarge: "48px",
    },
  },
  button: {
    border: {
      radius: "8px",
    },
    size: {
      small: {
        border: {
          radius: "8px",
        },
      },
      medium: {
        border: {
          radius: "8px",
        },
      },
      large: {
        border: {
          radius: "8px",
        },
      },
    },
    default: {
      background: {
        color: "brand",
      },
      padding: {
        horizontal: "16px",
        vertical: "8px",
      },
      font: {
        size: "small",
        weight: "500",
      },
    },
  },
};

/**
 * The main theme for the application.
 * It is a deep merge of the default grommet theme and the custom theme.
 */
export const myTheme: ThemeType = deepMerge(generate(16), aTheme);

/**
 * A theme that follows the Material Design guidelines.
 */
export const materialTheme: ThemeType = {
  global: {
    colors: {
      brand: "#6200EE", // Primary Purple
      "background-front": {
        dark: "#121212",
        light: "#FFFFFF",
      },
      "background-back": {
        dark: "#272727",
        light: "#F5F5F5",
      },
      text: {
        dark: "#FFFFFF",
        light: "rgba(0, 0, 0, 0.87)",
      },
      "text-weak": {
        dark: "rgba(255, 255, 255, 0.60)",
        light: "rgba(0, 0, 0, 0.60)",
      },
      border: {
        dark: "rgba(255, 255, 255, 0.12)",
        light: "rgba(0, 0, 0, 0.12)",
      },
      control: "brand",
      focus: "#3D5AFE", // Secondary Blue for focus
      active: "rgba(0, 0, 0, 0.12)",
      "status-critical": "#C51162",
      "status-error": "#B00020",
      "status-warning": "#FFAB00",
      "status-ok": "#00C853",
      "status-disabled": "rgba(0, 0, 0, 0.38)",
    },
    font: {
      family:
        "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      size: "16px",
      height: "24px",
      weight: 400,
    },
    active: {
      background: {
        color: "active",
      },
      color: {
        dark: "white",
        light: "text",
      },
    },
    hover: {
      background: {
        color: "active",
      },
      color: {
        dark: "white",
        light: "text",
      },
    },
    elevation: {
      light: {
        none: "none",
        xsmall: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        small: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        medium: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        large: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        xlarge: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
      },
      dark: {
        none: "none",
        xsmall: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        small: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        medium: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        large: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        xlarge: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
      },
    },
    focus: {
      border: {
        color: "focus",
      },
    },
    control: {
      border: {
        radius: "4px",
      },
    },
    drop: {
      background: "background-front",
      border: {
        radius: "4px",
      },
    },
    input: {
      padding: "12px",
      font: {
        weight: 400,
      },
    },
    edgeSize: {
      none: "0px",
      hair: "1px",
      xxsmall: "3px",
      xsmall: "6px",
      small: "12px",
      medium: "24px",
      large: "48px",
      xlarge: "96px",
    },
    spacing: "24px",
    size: {
      xxsmall: "48px",
      xsmall: "96px",
      small: "192px",
      medium: "384px",
      large: "768px",
      xlarge: "1152px",
      xxlarge: "1536px",
      full: "100%",
    },
  },
  button: {
    border: {
      radius: "4px",
      width: "1px",
    },
    padding: {
      vertical: "8px",
      horizontal: "16px",
    },
    primary: {
      background: { color: "brand" },
      color: "white",
    },
    secondary: {
      border: { color: "brand", width: "1px" },
      color: "brand",
    },
    disabled: {
      opacity: 0.3,
      background: { color: "status-disabled" },
      color: "text",
    },
    hover: {
      elevation: "xsmall",
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
    round: "4px",
    focus: {
      border: {
        color: "focus",
      },
    },
    error: {
      border: {
        color: "status-error",
      },
      color: "status-error",
      background: {
        color: "rgba(255,0,0,0.05)",
      },
    },
  },
  checkBox: {
    border: {
      color: {
        dark: "rgba(255, 255, 255, 0.5)",
        light: "rgba(0, 0, 0, 0.5)",
      },
      width: "2px",
    },
    check: {
      radius: "4px",
    },
    hover: {
      border: {
        color: "focus",
      },
    },
    toggle: {
      color: {
        dark: "white",
        light: "brand",
      },
      radius: "24px",
    },
  },
  layer: {
    background: "background-front",
    border: {
      radius: "4px",
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.5)",
    },
  },
  heading: {
    font: {
      family: "'Roboto', 'Helvetica Neue', Arial, sans-serif",
    },
    weight: 600,
  },
  textInput: {
    container: {
      extend: `
            background-color: white;
        `,
    },
  },
};

/**
 * A theme that follows the shadcn design system.
 */
export const shadcnTheme: ThemeType = {
  global: {
    colors: {
      background: {
        dark: "hsl(240 10% 3.9%)",
        light: "hsl(0 0% 100%)",
      },
      "background-front": {
        dark: "hsl(240 10% 3.9%)",
        light: "hsl(0 0% 100%)",
      },
      "background-back": {
        dark: "hsl(240 10% 3.9%)",
        light: "hsl(0 0% 100%)",
      },
      text: {
        dark: "hsl(0 0% 98%)",
        light: "hsl(240 10% 3.9%)",
      },
      "text-weak": {
        dark: "hsl(0 0% 63.9%)",
        light: "hsl(240 5.9% 10%)",
      },
      brand: {
        dark: "hsl(0 0% 98%)",
        light: "hsl(240 5.9% 10%)",
      },
      control: {
        dark: "brand",
        light: "brand",
      },
      "accent-1": {
        dark: "hsl(240 4.8% 95.9%)",
        light: "hsl(240 5.9% 90%)",
      },
      selected: "accent-1",
      border: {
        dark: "hsl(240 3.7% 15.9%)",
        light: "hsl(240 5.9% 90%)",
      },
      focus: "hsl(240 5.9% 10%)",
      "status-critical": "hsl(0 84.2% 60.2%)",
      "status-ok": "hsl(142.1 76.2% 41.2%)",
    },
    font: {
      family:
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      size: "16px",
      height: "24px",
    },
    active: {
      background: "accent-1",
      color: "text",
    },
    hover: {
      background: "accent-1",
      color: "text",
    },
    elevation: {
      light: {
        none: "none",
        xsmall: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        small:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        medium:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        large:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xlarge:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
      dark: {
        none: "none",
        xsmall: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        small:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        medium:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        large:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xlarge:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
    },
    input: {
      padding: "12px",
      weight: 400,
    },
    drop: {
      background: "background-front",
      border: {
        radius: "0.5rem",
      },
    },
  },
  button: {
    border: {
      radius: "0.5rem",
    },
    padding: {
      vertical: "8px",
      horizontal: "16px",
    },
    default: {},
    primary: {
      background: "brand",
      color: "background-front",
    },
    secondary: {
      background: "accent-1",
      color: "text",
    },
    active: {
      background: {
        dark: "hsl(240, 3.7%, 15.9%)",
        light: "hsl(240, 4.8%, 95.9%)",
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
    },
    primary: {
      background: { color: "brand" },
      color: {
        light: "oklch(0.985 0 0)", // --primary-foreground
        dark: "oklch(0.205 0 0)",
      },
    },
    secondary: {
      background: {
        light: "oklch(0.97 0 0)", // --secondary
        dark: "oklch(0.269 0 0)",
      },
      color: {
        light: "oklch(0.205 0 0)", // --secondary-foreground
        dark: "oklch(0.985 0 0)",
      },
    },
    disabled: {
      opacity: 0.5,
    },
  },
  formField: {
    border: false, // Style the input directly
    label: {
      margin: { bottom: "xsmall" },
      weight: 500,
    },
    round: "0.625rem",
  },
  textInput: {
    container: {
      extend: (props: ExtendProps<Record<string, any>>) => `
        background-color: ${
          props.theme.global.colors["input-background"]?.light ||
          props.theme.global.colors["input-background"]
        };
        ${
          props.theme.dark
            ? `
            background-color: ${
              props.theme.global.colors["input-background"]?.dark ||
              props.theme.global.colors["input-background"]
            };
            `
            : ""
        }
      `,
    },
    extend: (props: ExtendProps<Record<string, any>>) => `
      border: 1px solid ${
        typeof props.theme.global.colors.border === "string"
          ? props.theme.global.colors.border
          : props.theme.dark
          ? props.theme.global.colors.border.dark
          : props.theme.global.colors.border.light
      };
      &:focus {
        border-color: ${
          typeof props.theme.global.colors.focus === "string"
            ? props.theme.global.colors.focus
            : props.theme.dark
            ? props.theme.global.colors.focus.dark
            : props.theme.global.colors.focus.light
        };
      }
    `,
  },
  layer: {
    background: "background-front",
    border: {
      radius: "0.625rem",
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.8)",
    },
  },

  heading: {
    weight: 600,
  },
};

/**
 * A theme that follows the Netflix design system.
 */
export const netflixTheme: ThemeType = {
  global: {
    colors: {
      brand: "#E50914", // Official Netflix Red
      "background-back": "#000000",
      "background-front": "#141414",
      "background-contrast": "#333333",
      text: {
        dark: "#FFFFFF",
        light: "#FFFFFF",
      },
      "text-weak": {
        dark: "#A9A9A9",
        light: "#A9A9A9",
      },
      border: {
        dark: "#4D4D4D",
        light: "#4D4D4D",
      },
      control: "brand",
      focus: "#E50914",
      active: "rgba(109, 109, 109, 0.5)",
    },
    font: {
      family: "'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      size: "16px",
      height: "24px",
    },
    active: {
      background: "active",
      color: "white",
    },
    hover: {
      background: "active",
      color: "white",
    },
    elevation: {
      dark: {
        none: "none",
        small: "0px 2px 4px rgba(0, 0, 0, 0.5)",
        medium: "0px 4px 8px rgba(0, 0, 0, 0.7)",
        large: "0px 8px 16px rgba(0, 0, 0, 0.9)",
      },
    },
  },
  button: {
    border: {
      radius: "4px",
    },
    padding: {
      vertical: "8px",
      horizontal: "24px",
    },
    primary: {
      background: { color: "brand" },
      color: "white",
    },
    secondary: {
      background: { color: "background-contrast" },
      color: "white",
    },
    hover: {
      background: { color: "rgba(109, 109, 109, 0.7)" },
    },
  },
  heading: {
    font: {
      family: "'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    },
    weight: 700,
  },
  layer: {
    background: "#141414",
    border: {
      radius: "4px",
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.7)",
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
      },
      "text-xweak": {
        dark: "#999999",
        light: "#666666",
      },
      border: {
        dark: "#444444",
        light: "#CCCCCC",
      },
      control: "brand",
      "active-background": "background-contrast",
      "active-text": "text-strong",
      "selected-background": "brand",
      "selected-text": "text-strong",
      "status-critical": "#FF4040",
      "status-warning": "#FFAA15",
      "status-ok": "#00C781",
      "status-unknown": "#CCCCCC",
      "status-disabled": "#CCCCCC",
      "graph-0": "brand",
      "graph-1": "status-warning",
    },
    font: {
      family: '"Geist"',
      face: "/* cyrillic */\n@font-face {\n  font-family: 'Geist';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/geist/v3/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOMInpna6VEdtaiLqoA.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Geist';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/geist/v3/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOMIlJna6VEdtaiLqoA.woff2) format('woff2');\n  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Geist';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/geist/v3/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOMImpna6VEdtaiL.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic */\n@font-face {\n  font-family: 'Geist';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/geist/v3/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOMInpna6VEdtaiLqoA.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Geist';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/geist/v3/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOMIlJna6VEdtaiLqoA.woff2) format('woff2');\n  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Geist';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/geist/v3/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOMImpna6VEdtaiL.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",
      size: "12px",
      height: "16px",
      maxWidth: "192px",
    },
    active: {
      background: "active-background",
      color: "active-text",
    },
    hover: {
      background: "active-background",
      color: "active-text",
    },
    selected: {
      background: "selected-background",
      color: "selected-text",
    },
    borderSize: {
      xsmall: "1px",
      small: "2px",
      medium: "3px",
      large: "8px",
      xlarge: "16px",
    },
    breakpoints: {
      small: {
        value: 512,
        borderSize: {
          xsmall: "1px",
          small: "2px",
          medium: "3px",
          large: "4px",
          xlarge: "8px",
        },
        edgeSize: {
          none: "0px",
          hair: "1px",
          xxsmall: "2px",
          xsmall: "2px",
          small: "4px",
          medium: "8px",
          large: "16px",
          xlarge: "32px",
        },
        size: {
          xxsmall: "16px",
          xsmall: "32px",
          small: "64px",
          medium: "128px",
          large: "256px",
          xlarge: "512px",
          full: "100%",
        },
      },
      medium: {
        value: 1024,
      },
      large: {},
    },
    edgeSize: {
      none: "0px",
      hair: "1px",
      xxsmall: "2px",
      xsmall: "4px",
      small: "8px",
      medium: "16px",
      large: "32px",
      xlarge: "64px",
      responsiveBreakpoint: "small",
    },
    input: {
      padding: "8px",
      weight: 600,
    },
    spacing: "16px",
    size: {
      xxsmall: "32px",
      xsmall: "64px",
      small: "128px",
      medium: "256px",
      large: "512px",
      xlarge: "768px",
      xxlarge: "1024px",
      full: "100%",
    },
  },
  chart: {},
  diagram: {
    line: {},
  },
  meter: {},
  tip: {
    content: {
      background: {
        color: "background",
      },
      elevation: "none",
      round: false,
    },
  },
  layer: {
    background: {
      dark: "#111111",
      light: "#FFFFFF",
    },
  },
  heading: {
    level: {
      "1": {
        small: {
          size: "23px",
          height: "27px",
          maxWidth: "363px",
        },
        medium: {
          size: "33px",
          height: "37px",
          maxWidth: "533px",
        },
        large: {
          size: "55px",
          height: "59px",
          maxWidth: "875px",
        },
        xlarge: {
          size: "76px",
          height: "80px",
          maxWidth: "1216px",
        },
      },
      "2": {
        small: {
          size: "20px",
          height: "24px",
          maxWidth: "320px",
        },
        medium: {
          size: "28px",
          height: "32px",
          maxWidth: "448px",
        },
        large: {
          size: "36px",
          height: "40px",
          maxWidth: "576px",
        },
        xlarge: {
          size: "44px",
          height: "48px",
          maxWidth: "704px",
        },
      },
      "3": {
        small: {
          size: "17px",
          height: "21px",
          maxWidth: "277px",
        },
        medium: {
          size: "23px",
          height: "27px",
          maxWidth: "363px",
        },
        large: {
          size: "28px",
          height: "32px",
          maxWidth: "448px",
        },
        xlarge: {
          size: "33px",
          height: "37px",
          maxWidth: "533px",
        },
      },
      "4": {
        small: {
          size: "15px",
          height: "19px",
          maxWidth: "235px",
        },
        medium: {
          size: "17px",
          height: "21px",
          maxWidth: "277px",
        },
        large: {
          size: "20px",
          height: "24px",
          maxWidth: "320px",
        },
        xlarge: {
          size: "23px",
          height: "27px",
          maxWidth: "363px",
        },
      },
      "5": {
        small: {
          size: "11px",
          height: "15px",
          maxWidth: "171px",
        },
        medium: {
          size: "11px",
          height: "15px",
          maxWidth: "171px",
        },
        large: {
          size: "11px",
          height: "15px",
          maxWidth: "171px",
        },
        xlarge: {
          size: "11px",
          height: "15px",
          maxWidth: "171px",
        },
      },
      "6": {
        small: {
          size: "9px",
          height: "13px",
          maxWidth: "149px",
        },
        medium: {
          size: "9px",
          height: "13px",
          maxWidth: "149px",
        },
        large: {
          size: "9px",
          height: "13px",
          maxWidth: "149px",
        },
        xlarge: {
          size: "9px",
          height: "13px",
          maxWidth: "149px",
        },
      },
    },
  },
  button: {
    border: {
      width: "2px",
      radius: "12px",
    },
    padding: {
      vertical: "2px",
      horizontal: "14px",
    },
  },
  calendar: {
    small: {
      fontSize: "9.333333333333334px",
      lineHeight: 1.375,
      daySize: "18.29px",
    },
    medium: {
      fontSize: "12px",
      lineHeight: 1.45,
      daySize: "36.57px",
    },
    large: {
      fontSize: "20px",
      lineHeight: 1.11,
      daySize: "73.14px",
    },
  },
  checkBox: {
    size: "16px",
    toggle: {
      radius: "16px",
      size: "32px",
    },
  },
  clock: {
    analog: {
      hour: {
        width: "5px",
        size: "16px",
      },
      minute: {
        width: "3px",
        size: "8px",
      },
      second: {
        width: "2px",
        size: "6px",
      },
      size: {
        small: "48px",
        medium: "64px",
        large: "96px",
        xlarge: "144px",
        huge: "192px",
      },
    },
    digital: {
      text: {
        xsmall: {
          size: "6.666666666666667px",
          height: 1.5,
        },
        small: {
          size: "9.333333333333334px",
          height: 1.43,
        },
        medium: {
          size: "12px",
          height: 1.375,
        },
        large: {
          size: "14.666666666666666px",
          height: 1.167,
        },
        xlarge: {
          size: "17.333333333333332px",
          height: 1.1875,
        },
        xxlarge: {
          size: "22.666666666666664px",
          height: 1.125,
        },
      },
    },
  },
  paragraph: {
    small: {
      size: "11px",
      height: "15px",
      maxWidth: "171px",
    },
    medium: {
      size: "12px",
      height: "16px",
      maxWidth: "192px",
    },
    large: {
      size: "15px",
      height: "19px",
      maxWidth: "235px",
    },
    xlarge: {
      size: "17px",
      height: "21px",
      maxWidth: "277px",
    },
    xxlarge: {
      size: "23px",
      height: "27px",
      maxWidth: "363px",
    },
  },
  radioButton: {
    size: "16px",
  },
  text: {
    xsmall: {
      size: "9px",
      height: "13px",
      maxWidth: "149px",
    },
    small: {
      size: "11px",
      height: "15px",
      maxWidth: "171px",
    },
    medium: {
      size: "12px",
      height: "16px",
      maxWidth: "192px",
    },
    large: {
      size: "15px",
      height: "19px",
      maxWidth: "235px",
    },
    xlarge: {
      size: "17px",
      height: "21px",
      maxWidth: "277px",
    },
    xxlarge: {
      size: "23px",
      height: "27px",
      maxWidth: "363px",
    },
  },
  formField: {
    border: {
      color: "border",
      error: {
        color: {
          dark: "white",
          light: "status-critical",
        },
      },
      position: "inner",
      side: "all",
      style: "solid",
    },
    content: {
      pad: "small",
    },
    disabled: {
      background: {
        color: "status-disabled",
        opacity: "medium",
      },
    },
    error: {
      color: "status-critical",
      margin: {
        vertical: "xsmall",
        horizontal: "small",
      },
    },
    help: {
      color: "dark-3",
      margin: {
        start: "small",
      },
    },
    info: {
      color: "text-xweak",
      margin: {
        vertical: "xsmall",
        horizontal: "small",
      },
    },
    label: {
      margin: {
        vertical: "xsmall",
        horizontal: "small",
      },
    },
    margin: {
      bottom: "none",
    },
    survey: {
      label: {
        margin: {
          bottom: "xsmall",
        },
        size: "medium",
      },
    },
  },
};
