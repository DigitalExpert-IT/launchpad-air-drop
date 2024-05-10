import "@fontsource/rubik-one";
import {
  Heading,
  Stack,
  Text,
  VStack,
  HStack,
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function Launchpad() {
  const { t } = useTranslation();

  return (
    <Stack align={"center"} gap={5}>
      <Heading mb={10}>LAUNCHPAD</Heading>
      <HStack
        w={"80%"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", lg: "row" }}
        alignItems={{ lg: "", base: "left" }}
        bgColor={"#3C014A"}
        borderRadius={{ base: 10, lg: 20 }}
        px={10}
        py={5}
      >
        <Stack>
          <Text fontSize={22}>{t("launchpad.walletAddress")}</Text>
        </Stack>
        <Stack>
          <Text fontSize={22}>0x021931u2hedqwugd0182gduig3d1d1dvef2</Text>
        </Stack>
      </HStack>
      <Stack
        flexDir={{ lg: "row", base: "column" }}
        justifyContent={{ lg: "space-between", base: "" }}
        w={"80%"}
        alignItems={{ lg: "", base: "left" }}
        bgColor={"#1E1E1E"}
        borderRadius={{ base: 10, lg: 20 }}
        p={10}
      >
        <Stack gap={5}>
          <Box>
            <Text fontWeight={"700"} fontSize={24}>
              {t("launchpad.tokenDetails.name")}
            </Text>
            <Text fontSize={22} color={"#A4A4BE"}>
              BSCM
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"700"} fontSize={24}>
              {t("launchpad.tokenDetails.contact")}
            </Text>
            <Text fontSize={22} color={"#A4A4BE"}>
              0x021931u2hedqwugd0182gduig3d1d1dvef2
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"700"} fontSize={24}>
              {t("launchpad.tokenDetails.remainingAirdrops")}
            </Text>
            <Text fontSize={22} color={"#A4A4BE"}>
              70%
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"700"} fontSize={24}>
              {t("launchpad.tokenDetails.slidingPoints")}
            </Text>
            <Text fontSize={22} color={"#A4A4BE"}>
              72%
            </Text>
          </Box>
        </Stack>
        <Stack gap={5}>
          <Box>
            <Text fontWeight={"bold"} fontSize={32} color={"#FD92FD"}>
              {t("launchpad.tokenDetails.tokenAllocation")}
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"700"} fontSize={24}>
              {t("launchpad.tokenDetails.lpLiquidity")}
            </Text>
            <Text fontSize={22} color={"#A4A4BE"}>
              0x021931u2hedqwugd0182gduig3d1d1dvef2
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"700"} fontSize={24}>
              {t("launchpad.tokenDetails.aiRecognition.airdrop")}
            </Text>
            <Text fontSize={22} color={"#A4A4BE"}>
              70%
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"700"} fontSize={24}>
              {t("launchpad.tokenDetails.aiRecognition.numberOfPeople")}
            </Text>
            <Text fontSize={22} color={"#A4A4BE"}>
              72%
            </Text>
          </Box>
        </Stack>
      </Stack>
      <VStack
        minW={"75%"}
        flexDir={"row"}
        justifyContent={"space-between"}
        mt={"-5"}
      >
        <Box></Box>
        <Box>
          <Text fontSize={20} color={"#A4A4BE"}>
            {t("launchpad.airdropTime")}: 4/5/2024, 6:00:00 PM
          </Text>
        </Box>
      </VStack>
      <VStack minW={"75%"} flexDir={"row"} justifyContent={"space-between"}>
        <Flex flexDir={{ base: "column", lg: "row" }} gap={5}>
          <Button bgColor="#9321DD" fontSize={24}>
            {t("launchpad.receiveButton")}
          </Button>
          <Button bgColor="#9321DD" fontSize={24}>
            {t("launchpad.aiRecognitionVerificationButton")}
          </Button>
        </Flex>
        <Box></Box>
      </VStack>
      <Stack
        maxW={"80%"}
        alignItems={{ lg: "left", base: "center" }}
        bgColor={"black"}
        borderRadius={{ base: 10, lg: 20 }}
        mb={20}
        p={10}
      >
        <Stack gap={5}>
          <Box>
            <Text fontWeight={"700"} fontSize={32}>
              {t("launchpad.investmentRules.title")}
            </Text>
          </Box>
          <Box>
            <Text fontSize={24}>
              {t("launchpad.investmentRules.firstDescription")}
            </Text>
          </Box>
          <Box>
            <Text fontSize={24}>
              {t("launchpad.investmentRules.secondDescription")}
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
