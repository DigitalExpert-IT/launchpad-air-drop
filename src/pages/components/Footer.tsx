import "@fontsource/rubik-one";
import "@fontsource/poppins";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Flex
      flexDir={{ lg: "row", base: "column" }}
      justifyContent={"space-between"}
      m={10}
      gap={10}
      alignItems={{ lg: "", base: "center" }}
    >
      <Box>
        <Heading
          fontSize={48}
          fontFamily={"Rubik One, sans-serif"}
          bgGradient={"linear(to-r, #F488FA, #9E2DE1)"}
          bgClip={"text"}
        >
          {t("footer.title")}
        </Heading>
        <Text fontFamily={"Poppins, sans-serif"} fontSize={15}>
          {t("footer.copyright")}
        </Text>
      </Box>
    </Flex>
  );
}
