import "@fontsource/rubik-one";
import {
  Heading,
  Stack,
  Text,
  VStack,
  HStack,
  Flex,
  Box,
  Image,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { usePair24h } from "@/hooks/useCrypto";
import { formatPrice } from "@/utils/formatter";

export default function OrderForm() {
  const { t } = useTranslation();
  const firstPair = "AI";
  const secondPair = "USDT";
  const { priceChangePercent, volume, lastPrice } = usePair24h(
    firstPair.concat(secondPair), 8000
  );

  return (
    <Box bgGradient={"linear(#370144, #3D004B, #000)"} mb={20}>
      <Stack align={"center"}>
        <Heading mb={10}>{t("orderForm.title")}</Heading>
        <HStack
          w={"80%"}
          justifyContent={"space-between"}
          flexDir={{ base: "column", lg: "row" }}
          alignItems={{ lg: "", base: "left" }}
          py={5}
          zIndex={"10"}
        >
          <Box
            background={"black"}
            borderRadius={"30px"}
            p={10}
            border={"1px solid #A4A4BE"}
          >
            <Flex
              gap={10}
              w={"fit-content"}
              alignItems={"center"}
              p={3}
              borderRadius={"12"}
              flexDir={{ base: "column", sm: "row" }}
            >
              <Image
                src="/assets/usdt-with-bg.png"
                w={"85px"}
                h={"85px"}
                alt="usdt"
              />
              <Text
                fontSize={"3xl"}
                color={"#F185F9"}
                fontWeight={"700"}
                wordBreak={"break-word"}
                textAlign={{ base: "center", md: "start" }}
              >
                {firstPair} / {secondPair}
              </Text>
            </Flex>
            <HStack flexDir={{ base: "column", sm: "row" }} gap={6}>
              <Text
                color={`${priceChangePercent < 0 ? "#EA3943" : "#35D5A4"}`}
                fontSize={"5xl"}
              >
                {priceChangePercent}%
              </Text>
              {priceChangePercent < 0 ? (
                <TriangleDownIcon color={"#EA3943"} fontSize={"3xl"} />
              ) : (
                <TriangleUpIcon color={"#35D5A4"} fontSize={"5xl"} />
              )}
            </HStack>
            <VStack gap={6}>
              <HStack
                justifyContent={"space-between"}
                w={"100%"}
                flexDir={{ base: "column", sm: "row" }}
              >
                <Text fontSize={"2xl"} color={"#A4A4BE"}>
                  {t("orderForm.volume")}
                </Text>
                <Text fontSize={"2xl"}>{formatPrice(volume)}</Text>
              </HStack>
              <HStack
                justifyContent={"space-between"}
                w={"100%"}
                flexDir={{ base: "column", sm: "row" }}
              >
                <Text fontSize={"2xl"} color={"#A4A4BE"}>
                  {t("orderForm.lastPrice")}
                </Text>
                <Text fontSize={"2xl"}>{formatPrice(lastPrice)}</Text>
              </HStack>
              <Tooltip label={"you will get it while the authorize"}>
              <Button bgColor="#1E1E1EÍ" minW={"100%"} fontSize={{ base: "md", sm: "2xl" }} disabled={true}>
                {t("launchpad.receiveButton")}
              </Button>
              </Tooltip>
            </VStack>
          </Box>
          <Box
            background={"#1E1E1E"}
            borderRadius={"30px"}
            p={{ base: 5, sm: 10 }}
            border={"1px solid #A4A4BE"}
            maxW={"1077px"}
          >
            <Text fontSize={{lg: "3xl", base: "1xl"}} fontWeight={"600"}>
              {t("orderForm.investmentRules.title")}
            </Text>
            <Text fontSize={{lg: "2xl", base: "xl"}} textAlign={"justify"}>
              {t("orderForm.investmentRules.firstDescription")}
            </Text>
            <Text fontSize={{lg: "2xl", base: "xl"}} textAlign={"justify"} pt={"12vh"}>
              {t("orderForm.investmentRules.secondDescription")}
            </Text>
          </Box>
        </HStack>
      </Stack>
    </Box>
  );
}
