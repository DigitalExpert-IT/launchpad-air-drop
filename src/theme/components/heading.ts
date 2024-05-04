import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
const baseStyle = defineStyle({
  letterSpacing: "2px",
  fontWeight: "bold",
});

const sizes = {
  "4xl": defineStyle({
    ...baseStyle,
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1,
  }),
  "3xl": defineStyle({
    ...baseStyle,
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1,
  }),
  "2xl": defineStyle({
    ...baseStyle,
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1],
  }),
  xl: defineStyle({
    ...baseStyle,
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2],
  }),
  lg: defineStyle({
    ...baseStyle,
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2],
  }),
  md: defineStyle({
    ...baseStyle,
    fontSize: "xl",
    lineHeight: 1.2,
  }),
  sm: defineStyle({
    ...baseStyle,
    fontSize: "md",
    lineHeight: 1.2,
  }),
  xs: defineStyle({
    ...baseStyle,
    fontSize: "sm",
    lineHeight: 1.2,
  }),
};

export const headingTheme = defineStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "xl",
  },
});
