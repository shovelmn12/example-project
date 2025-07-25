import type { ThemeType } from "grommet";
import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";

export const caludeTheme: ThemeType = {
  global: {
    colors: {
      // shadcn color palette
      background: "#ffffff",
      foreground: "#0f172a",
      card: "#ffffff",
      "card-foreground": "#0f172a",
      popover: "#ffffff",
      "popover-foreground": "#0f172a",
      primary: "#0f172a",
      "primary-foreground": "#f8fafc",
      secondary: "#f1f5f9",
      "secondary-foreground": "#0f172a",
      muted: "#f1f5f9",
      "muted-foreground": "#64748b",
      accent: "#f1f5f9",
      "accent-foreground": "#0f172a",
      destructive: "#ef4444",
      "destructive-foreground": "#f8fafc",
      border: "#e2e8f0",
      input: "#e2e8f0",
      ring: "#0f172a",

      // Additional colors for components
      text: {
        dark: "#0f172a",
        light: "#64748b",
      },

      // Status colors
      "status-critical": "#ef4444",
      "status-error": "#ef4444",
      "status-warning": "#f59e0b",
      "status-ok": "#22c55e",
      "status-unknown": "#64748b",
      "status-disabled": "#94a3b8",

      // Focus and active states
      focus: "#0f172a",
    },

    font: {
      family:
        '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      size: "14px",
      height: "1.5",
    },

    breakpoints: {
      small: {
        value: 640,
      },
      medium: {
        value: 768,
      },
      large: {
        value: 1024,
      },
      xlarge: {
        value: 1280,
      },
    },

    edgeSize: {
      none: "0px",
      hair: "1px",
      xxsmall: "2px",
      xsmall: "4px",
      small: "8px",
      medium: "16px",
      large: "24px",
      xlarge: "32px",
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
    },

    input: {
      padding: {
        horizontal: "12px",
        vertical: "8px",
      },
      weight: 400,
    },
  },

  // Button component theming
  button: {
    default: {
      background: {
        color: "primary",
      },
      color: "primary-foreground",
      border: {
        radius: "6px",
      },
      padding: {
        horizontal: "16px",
        vertical: "8px",
      },
      font: {
        weight: 500,
      },
    },
    primary: {
      background: {
        color: "primary",
      },
      color: "primary-foreground",
      border: {
        radius: "6px",
      },
      padding: {
        horizontal: "16px",
        vertical: "8px",
      },
    },
    secondary: {
      background: {
        color: "secondary",
      },
      color: "secondary-foreground",
      border: {
        color: "border",
        radius: "6px",
      },
      padding: {
        horizontal: "16px",
        vertical: "8px",
      },
    },
    border: {
      radius: "6px",
    },
    size: {
      small: {
        border: {
          radius: "6px",
        },
        pad: {
          horizontal: "12px",
          vertical: "6px",
        },
      },
      medium: {
        border: {
          radius: "6px",
        },
        pad: {
          horizontal: "16px",
          vertical: "8px",
        },
      },
      large: {
        border: {
          radius: "6px",
        },
        pad: {
          horizontal: "20px",
          vertical: "10px",
        },
      },
    },
  },

  // Card component
  card: {
    container: {
      background: "card",
      elevation: "small",
    },
    header: {
      pad: "medium",
    },
    body: {
      pad: "medium",
    },
    footer: {
      pad: "medium",
    },
  },

  // Form inputs
  formField: {
    border: {
      color: "border",
      side: "all",
    },
    content: {
      pad: "small",
    },
    error: {
      color: "status-critical",
      margin: {
        vertical: "xsmall",
      },
    },
    help: {
      color: "muted-foreground",
      margin: {
        start: "small",
      },
    },
    info: {
      color: "muted-foreground",
      margin: {
        vertical: "xsmall",
      },
    },
    label: {
      color: "foreground",
      margin: {
        vertical: "xsmall",
      },
    },
    margin: {
      bottom: "small",
    },
  },

  // Table
  table: {
    header: {
      background: {
        color: "muted",
      },
      pad: {
        horizontal: "small",
        vertical: "xsmall",
      },
    },
    body: {
      pad: {
        horizontal: "small",
        vertical: "xsmall",
      },
    },
  },

  // Layer (Modal/Dialog equivalent)
  layer: {
    background: {
      color: "popover",
    },
    border: {
      radius: "8px",
    },
    container: {
      elevation: "large",
    },
  },

  // Heading
  heading: {
    level: {
      1: {
        font: {
          size: "32px",
          weight: 800,
        },
      },
      2: {
        font: {
          size: "24px",
          weight: 700,
        },
      },
      3: {
        font: {
          size: "20px",
          weight: 600,
        },
      },
      4: {
        font: {
          size: "18px",
          weight: 600,
        },
      },
      5: {
        font: {
          size: "16px",
          weight: 600,
        },
      },
      6: {
        font: {
          size: "14px",
          weight: 600,
        },
      },
    },
  },

  // Text
  text: {
    medium: {
      size: "14px",
      height: "20px",
    },
    small: {
      size: "12px",
      height: "16px",
    },
    large: {
      size: "16px",
      height: "24px",
    },
  },

  // Paragraph
  paragraph: {
    medium: {
      size: "14px",
      height: "20px",
    },
    small: {
      size: "12px",
      height: "16px",
    },
    large: {
      size: "16px",
      height: "24px",
    },
  },

  // CheckBox
  checkBox: {
    border: {
      color: "border",
    },
    color: "primary",
    gap: "small",
    hover: {
      background: {
        color: "accent",
      },
    },
    size: "16px",
  },

  // RadioButton
  radioButton: {
    border: {
      color: "border",
    },
    check: {
      color: "primary",
    },
    gap: "small",
    hover: {
      background: {
        color: "accent",
      },
    },
    size: "16px",
  },

  // Menu
  menu: {
    background: "popover",
  },

  // Anchor (Link)
  anchor: {
    color: "primary",
    hover: {
      textDecoration: "underline",
    },
  },
};

export const shadcnTheme: ThemeType = deepMerge(grommet, {
  global: {
    colors: {
      background: "#f8fafc", // Tailwind's slate-50
      brand: "#6366f1", // Tailwind indigo-500
      control: "#6366f1", // used for buttons, checkboxes, etc.
      focus: "#c7d2fe", // Tailwind indigo-200 (focus ring)

      border: {
        light: "#e2e8f0", // slate-200
        dark: "#334155", // slate-800
      },

      text: {
        light: "#0f172a", // slate-900
        dark: "#f8fafc", // slate-50
      },
    },
    font: {
      family: "Inter, sans-serif",
      size: "16px",
      height: "24px",
    },
    input: {
      padding: "12px",
      border: {
        radius: "12px",
        width: "1px",
        color: "border",
      },
    },
    focus: {
      border: {
        color: "focus",
      },
      shadow: {
        color: "focus",
        size: "0 0 0 2px",
      },
    },
    elevation: {
      light: {
        small: "0px 1px 2px rgba(0,0,0,0.05)",
        medium: "0px 4px 6px rgba(0,0,0,0.1)",
        large: "0px 10px 15px rgba(0,0,0,0.15)",
      },
    },
    breakpoints: {
      small: { value: 640 },
      medium: { value: 768 },
      large: { value: 1024 },
    },
    borderSize: {
      small: "1px",
      medium: "2px",
    },
    edgeSize: {
      none: "0px",
      small: "8px",
      medium: "16px",
      large: "32px",
    },
    rounding: {
      small: "8px",
      medium: "16px", // maps to rounded-xl or 2xl
    },
  },
  button: {
    border: {
      radius: "12px",
    },
    padding: {
      vertical: "12px",
      horizontal: "24px",
    },
    primary: {
      color: "brand",
    },
    extend: `
      font-weight: 500;
      box-shadow: 0 2px 8px rgba(99, 102, 241, 0.25);
      &:hover {
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.35);
      }
    `,
  },
  checkBox: {
    border: {
      color: "border",
      radius: "6px",
    },
    check: {
      color: "brand",
    },
    hover: {
      border: {
        color: "brand",
      },
    },
  },
  textInput: {
    extend: `
      background-color: white;
      border-radius: 12px;
      padding: 12px;
      border: 1px solid #e2e8f0;
      &:focus {
        border-color: #c7d2fe;
        box-shadow: 0 0 0 2px #c7d2fe;
      }
    `,
  },
  formField: {
    border: false,
    label: {
      size: "small",
      margin: { bottom: "4px" },
    },
    margin: { bottom: "16px" },
  },
});

export const theme: ThemeType = {
  global: {
    colors: {
      background: {
        dark: "#09090b",
        light: "#ffffff",
      },
      foreground: {
        dark: "#fafafa",
        light: "#09090b",
      },
      primary: {
        dark: "#fafafa",
        light: "#18181b",
      },
      "primary-foreground": {
        dark: "#18181b",
        light: "#fafafa",
      },
      secondary: {
        dark: "#27272a",
        light: "#f4f4f5",
      },
      "secondary-foreground": {
        dark: "#fafafa",
        light: "#18181b",
      },
      muted: {
        dark: "#27272a",
        light: "#f4f4f5",
      },
      "muted-foreground": {
        dark: "#a1a1aa",
        light: "#71717a",
      },
      accent: {
        dark: "#27272a",
        light: "#f4f4f5",
      },
      "accent-foreground": {
        dark: "#fafafa",
        light: "#18181b",
      },
      destructive: {
        dark: "#852020",
        light: "#ef4444",
      },
      "destructive-foreground": {
        dark: "#fafafa",
        light: "#fafafa",
      },
      border: {
        dark: "#27272a",
        light: "#e4e4e7",
      },
      input: {
        dark: "#27272a",
        light: "#e4e4e7",
      },
      ring: {
        dark: "#a1a1aa",
        light: "#a1a1aa",
      },
      card: {
        dark: "#09090b",
        light: "#ffffff",
      },
      focus: "#a1a1aa",
    },
    font: {
      family:
        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      size: "14px",
      height: "20px",
    },
    edgeSize: {
      none: "0px",
      xxsmall: "3px",
      xsmall: "6px",
      small: "12px",
      medium: "24px",
      large: "48px",
      xlarge: "96px",
    },
    input: {
      padding: "12px",
      weight: 400,
    },
    control: {
      border: {
        radius: "0.5rem",
      },
    },
  },
  button: {
    border: {
      radius: "0.5rem",
      width: "1px",
    },
    padding: {
      vertical: "10px",
      horizontal: "20px",
    },
    primary: {
      background: {
        color: "primary",
      },
      color: "primary-foreground",
    },
    secondary: {
      background: {
        color: "secondary",
      },
      color: "secondary-foreground",
    },
    default: {
      background: {
        color: "transparent",
      },
      border: {
        color: "border",
      },
      color: "foreground",
    },
  },
  heading: {
    font: {
      family: "inherit",
    },
    level: {
      "1": {
        font: {
          size: "36px",
          height: "40px",
          weight: "700",
        },
      },
      "2": {
        font: {
          size: "30px",
          height: "36px",
          weight: "700",
        },
      },
      "3": {
        font: {
          size: "24px",
          height: "32px",
          weight: "700",
        },
      },
      "4": {
        font: {
          size: "20px",
          height: "28px",
          weight: "700",
        },
      },
    },
  },
  card: {
    container: {
      round: "0.75rem",
      elevation: "none",
      background: "card",
      border: {
        color: "border",
        size: "1px",
        side: "all",
      },
    },
    header: {
      pad: "medium",
    },
    body: {
      pad: "medium",
    },
    footer: {
      pad: "medium",
    },
  },
  accordion: {
    border: {
      side: "bottom",
      color: "border",
    },
  },
  checkBox: {
    border: {
      color: "border",
      width: "1px",
    },
    check: {
      radius: "0.25rem",
    },
    toggle: {
      radius: "24px",
    },
  },
  layer: {
    background: "background",
    border: {
      radius: "0.75rem",
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.8)",
    },
  },
};
