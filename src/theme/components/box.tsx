// components/ui/box.tsx

import * as React from "react";
import { cn } from "@/utils"; // Adjust this import path if needed

// --- Type Definitions (Inspired by Grommet) ---

type Size =
  | "none"
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge";
type Responsive<T> =
  | T
  | { horizontal?: T; vertical?: T; top?: T; bottom?: T; left?: T; right?: T };

type Align = "start" | "center" | "end" | "baseline" | "stretch";
type Justify = "start" | "center" | "end" | "between" | "around" | "stretch";
type Direction = "row" | "column" | "row-reverse" | "column-reverse";

// --- Main Component Props Interface ---

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The direction of the flex container. */
  direction?: Direction;
  /** The alignment of items on the cross-axis. */
  align?: Align;
  /** The alignment of items on the main-axis. */
  justify?: Justify;
  /** Spacing between child elements. */
  gap?: Size;
  /** Inner spacing of the box. */
  pad?: Responsive<Size>;
  /** Outer spacing (margin) of the box. */
  margin?: Responsive<Size>;
  /** Whether children should wrap when they run out of space. */
  wrap?: boolean;
  /** Whether the box should fill its container's space. */
  fill?: boolean;
  /** If true, the layout direction will flip on medium-sized screens and up. */
  responsive?: boolean;
  /** The border-radius of the box. */
  round?: Size | "full";
  /** The box-shadow of the box. */
  elevation?: "sm" | "md" | "lg" | "xl" | "2xl";
  /** The background color, using shadcn/ui's theme semantics. */
  background?: "background" | "card" | "primary" | "secondary" | "destructive";
  /** The border style, using shadcn/ui's theme border color. */
  border?: boolean;
}

// --- Helper Mappings from Props to Tailwind Classes ---

const sizeToClass = (size: Size | undefined, prefix: string): string => {
  if (!size) return "";
  const map: Record<Size, string> = {
    none: `${prefix}-0`,
    xxsmall: `${prefix}-1`, // 0.25rem
    xsmall: `${prefix}-2`, // 0.5rem
    small: `${prefix}-4`, // 1rem
    medium: `${prefix}-6`, // 1.5rem
    large: `${prefix}-8`, // 2rem
    xlarge: `${prefix}-12`, // 3rem
  };
  return map[size];
};

const mapResponsiveSize = (
  prop: Responsive<Size> | undefined,
  prefix: string
): string => {
  if (!prop) return "";
  if (typeof prop === "string") {
    return sizeToClass(prop, prefix);
  }
  if (typeof prop === "object") {
    const { horizontal, vertical, top, bottom, left, right } = prop;
    // Helper to get the numeric part of the class, e.g., 'p-4' -> '4'
    const sizeValue = (s: Size | undefined) =>
      s ? sizeToClass(s, "").substring(1) : "";

    return cn(
      horizontal && `px-${sizeValue(horizontal)}`,
      vertical && `py-${sizeValue(vertical)}`,
      top && `pt-${sizeValue(top)}`,
      bottom && `pb-${sizeValue(bottom)}`,
      left && `pl-${sizeValue(left)}`,
      right && `pr-${sizeValue(right)}`
    );
  }
  return "";
};

// --- The Box Component Implementation ---

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      className,
      direction = "column",
      align,
      justify,
      gap,
      pad,
      margin,
      wrap = false,
      fill = false,
      responsive = true,
      round,
      elevation,
      background,
      border,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      "flex", // Base class

      // Layout Direction & Responsive Behavior
      {
        "flex-col": direction === "column",
        "flex-row": direction === "row",
        "flex-col-reverse": direction === "column-reverse",
        "flex-row-reverse": direction === "row-reverse",
        "md:flex-row": responsive && direction === "column",
        "md:flex-col": responsive && direction === "row",
      },

      // Spacing
      gap && sizeToClass(gap, "gap"),
      mapResponsiveSize(pad, "p"),
      mapResponsiveSize(margin, "m"),

      // Flexbox Alignment
      {
        "items-start": align === "start",
        "items-center": align === "center",
        "items-end": align === "end",
        "items-stretch": align === "stretch",
        "items-baseline": align === "baseline",
        "justify-start": justify === "start",
        "justify-center": justify === "center",
        "justify-end": justify === "end",
        "justify-between": justify === "between",
        "justify-around": justify === "around",
        "justify-stretch": justify === "stretch",
      },

      // Behavior
      wrap && "flex-wrap",
      fill && "flex-1 w-full h-full",

      // Visual Styles
      background && `bg-${background}`,
      border && "border border-border", // Uses the theme's border color
    //   round &&
    //     {
    //       "rounded-sm": round === "xsmall",
    //       rounded: round === "small",
    //       "rounded-md": round === "medium",
    //       "rounded-lg": round === "large",
    //       "rounded-xl": round === "xlarge",
    //       "rounded-full": round === "full",
    //     }[round],
      elevation && `shadow-${elevation}`,

      className // Allow user to pass in their own classes
    );

    return <div className={classes} ref={ref} {...props} />;
  }
);
Box.displayName = "Box";

export { Box };
