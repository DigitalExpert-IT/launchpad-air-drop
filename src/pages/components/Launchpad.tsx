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
import { useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { useValidUser } from "@/hooks/contract/airdrop";

export default function Launchpad() {
  const { t } = useTranslation();
  const router = useRouter();
  const address = useAddress();
  const {data} = useValidUser()

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
            <Text fontSize={{lg: "xl", base: "lg"}}>{address}</Text>
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
                SLEEPLESS AI
              </Text>
            </Box>
            <Box>
              <Text fontWeight={"700"} fontSize={{lg: "2xl", base: "xl"}}>
                {t("launchpad.tokenDetails.contact")}
              </Text>
              <Text fontSize={{lg: "xl", base: "lg"}} color={"#A4A4BE"}>
                0xBDA011D7F8EC00F66C1923B049B94c67d148d8b2
              </Text>
            </Box>
            <Box>
              <Text fontWeight={"700"} fontSize={{lg: "2xl", base: "xl"}}>
                {t("launchpad.tokenDetails.remainingAirdrops")}
              </Text>
              <Text fontSize={{lg: "xl", base: "lg"}} color={"#A4A4BE"}>
                85%
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
                {t("launchpad.tokenDetails.aiRecognition.airdrop")}
              </Text>
              <Text fontSize={22} color={"#A4A4BE"}>
                85%
              </Text>
            </Box>
          </Stack>
        </Stack>
        <VStack
          minW={"75%"}
          flexDir={"row"}
          justifyContent={"space-between"}
          mb={5}
        >
          <Box>
            <Button bgColor="#9321DD" fontSize={{ base: "md", sm: "2xl" }} onClick={() => router.push(data ? "/kyc" : "/")}>
              {t("launchpad.aiRecognitionVerificationButton")}
            </Button>
          </Box>
          <Box>
          </Box>
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
