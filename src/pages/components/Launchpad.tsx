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
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import launchpad from "@/locales/en/launchpad.json"

export default function Launchpad() {
  const { t } = useTranslation();

  return (
    <Box
      backgroundImage={"https://ik.imagekit.io/msxxxaegj/alitaLaunchAir/pattern2.png?updatedAt=1715492798165"}
      backgroundPosition={"top"}
      backgroundSize={"cover"}
      position={"relative"}
      minH={"70vh"}
    >
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        gap={5}
        bgGradient={"linear(180deg, transparent 10%, #3D004B 70%)"}
      >
        <Heading mb={10}>{t("launchpad.title")}</Heading>
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
            <Text fontSize={{lg: "1xl", base: "xl"}}>{t("launchpad.walletAddress")}</Text>
          </Stack>
          <Stack>
            <Text fontSize={{lg: "xl", base: "lg"}}>0x021931u2hedqwugd0182gduig3d1d1dvef2</Text>
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
              <Text fontWeight={"700"} fontSize={{lg: "2xl", base: "xl"}}>
                {t("launchpad.tokenDetails.name")}
              </Text>
              <Text fontSize={{lg: "xl", base: "lg"}} color={"#A4A4BE"}>
                BSCM
              </Text>
            </Box>
            <Box>
              <Text fontWeight={"700"} fontSize={{lg: "2xl", base: "xl"}}>
                {t("launchpad.tokenDetails.contact")}
              </Text>
              <Text fontSize={{lg: "xl", base: "lg"}} color={"#A4A4BE"}>
                0x021931u2hedqwugd0182gduig3d1d1dvef2
              </Text>
            </Box>
            <Box>
              <Text fontWeight={"700"} fontSize={{lg: "2xl", base: "xl"}}>
                {t("launchpad.tokenDetails.remainingAirdrops")}
              </Text>
              <Text fontSize={{lg: "xl", base: "lg"}} color={"#A4A4BE"}>
                70%
              </Text>
            </Box>
            <Box>
              <Text fontWeight={"700"} fontSize={{lg: "2xl", base: "xl"}}>
                {t("launchpad.tokenDetails.slidingPoints")}
              </Text>
              <Text fontSize={{lg: "xl", base: "lg"}} color={"#A4A4BE"}>
                72%
              </Text>
            </Box>
          </Stack>
          <Stack gap={5}>
            <Box>
              <Text fontWeight={"bold"} fontSize={{lg: "4xl", base: "1xl"}} color={"#FD92FD"}>
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
            <Text fontSize={{ base: "md", sm: "xl" }} color={"#A4A4BE"}>
              {t("launchpad.airdropTime")}: 4/5/2024, 6:00:00 PM
            </Text>
          </Box>
        </VStack>
        <VStack minW={"75%"} flexDir={"row"} justifyContent={"space-between"}>
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            gap={5}
            flexWrap={"wrap"}
          >
            <Button bgColor="#9321DD" fontSize={{ base: "md", sm: "2xl" }}>
              {t("launchpad.receiveButton")}
            </Button>
            <Button bgColor="#9321DD" fontSize={{ base: "md", sm: "2xl" }}>
              {t("launchpad.aiRecognitionVerificationButton")}
            </Button>
          </Flex>
          <Box></Box>
        </VStack>
        <Stack
        display={"flex"}
          maxW={"80%"}
          flexWrap={"wrap"}
          alignItems={{ lg: "left", base: "center" }}
          bgColor={"black"}
          borderRadius={{ base: 10, lg: 20 }}
          p={{ base: 5, sm: 10 }}
        >
          <Stack gap={5}>
            <Box>
              <Text fontWeight={"700"} fontSize={{lg: "3xl", base: "lg"}}>
                {t("launchpad.investmentRules.title")}
              </Text>
            </Box>
            <Box>
              <Text fontSize={{lg: "xl", base: "md"}}>
                {t("launchpad.investmentRules.firstDescription")}
              </Text>
            </Box>
            <Box>
              <Text fontSize={{lg: "xl", base: "md"}} style={{whiteSpace: "pre-line"}}>
                {t("launchpad.investmentRules.secondDescription")}
              </Text>
            </Box>
            <Box>
              <UnorderedList>
                {launchpad.investmentRules.thirdDescription.map((item:string, idx) => {
                  const value = item
                  return(
                  <ListItem fontSize={{lg: "xl", base: "md"}}  key={idx}>
                    {t(value)}
                  </ListItem>
                  )
                })}
                </UnorderedList>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
