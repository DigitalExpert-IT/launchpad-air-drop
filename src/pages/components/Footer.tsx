import "@fontsource/rubik-one";
import "@fontsource/poppins";
import { Box, Flex, HStack, Heading, Icon, Text } from "@chakra-ui/react";
import {
  FaInstagram,
  FaTwitter,
  FaTelegram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
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
      <HStack gap={5}>
        <Icon as={FaInstagram} boxSize={6} />
        <Icon as={FaTwitter} boxSize={6} />
        <Icon as={FaFacebook} boxSize={6} />
        <Icon as={FaTiktok} boxSize={6} />
        <Icon as={FaYoutube} boxSize={6} />
        <Icon as={FaTelegram} boxSize={6} />
      </HStack>
    </Flex>
  );
}
