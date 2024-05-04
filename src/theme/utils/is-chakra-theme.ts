import { ChakraTheme } from "@chakra-ui/react";
import { isObject } from "@chakra-ui/shared-utils";

export const requiredChakraThemeKeys: (keyof ChakraTheme)[] = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices",
];

export function isChakraTheme(unit: unknown): unit is ChakraTheme {
  if (!isObject(unit)) {
    return false;
  }

  return requiredChakraThemeKeys.every((propertyName) =>
    Object.prototype.hasOwnProperty.call(unit, propertyName)
  );
}
