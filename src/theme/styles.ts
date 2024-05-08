import { Styles } from "@chakra-ui/theme-tools";

export const styles: Styles = {
  global: {
    body: {
      color: "chakra-body-text",
      bg: "black",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base",
      height: "100vh",
      fontFamily: "Poppins, sans-serif"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color",
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color",
    },
  },
};
