import "@fontsource/rubik-one";
import { Heading, Stack, Text, VStack, Image, Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <Box bgGradient={"linear(0deg, transparent 5%, #3D004B 70%)"}>
      <Box
        backgroundImage={"https://ik.imagekit.io/msxxxaegj/alitaLaunchAir/alitaTown.png?updatedAt=1715060801897"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
        position={"relative"}
        minH={"60vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack align={"center"}>
          <Heading>{t("about.title")}</Heading>
          <VStack
            flexDir={{ lg: "row", base: "column" }}
            align={"center"}
            maxW={"80%"}
            m={10}
            gap={10}
            alignItems={{ lg: "", base: "center" }}
            bgColor={"rgba(0, 0, 0, 0.5)"}
            borderRadius={{ base: 20, lg: 50 }}
            mb={20}
          >
            <Stack ml={{ lg: 25 }} align={"center"}>
              <Image
                src={
                  "https://ik.imagekit.io/msxxxaegj/alitaLaunchAir/alita.png?updatedAt=1715060841922"
                }
                w={"85%"}
                alt=""
                mt={5}
              />
            </Stack>
            <Stack mx={10} mb={{ base: 10, lg: 0 }}>
              <Heading
                fontSize={48}
                fontFamily={"Rubik One, sans-serif"}
                bgGradient={"linear(to-r, #F488FA, #9E2DE1)"}
                bgClip={"text"}
              >
                {t("about.card.title")}
              </Heading>
              <Text
                fontFamily={"Poppins, sans-serif"}
                fontSize={20}
                maxW={{ base: "90%", sm: "80%" }}
              >
                {t("about.card.description")}
              </Text>
            </Stack>
          </VStack>
        </Stack>
      </Box>
    </Box>
  );
}
