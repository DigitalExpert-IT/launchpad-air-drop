import Layout from "@/components/layout";
import { Heading, Stack, VStack, Text } from "@chakra-ui/react";
import Footer from "./components/Footer";
import RegisterForm from "./components/RegisterForm";
import { Card, CardBody, Box, Image} from "@chakra-ui/react";
import Header from "./components/Header";
import { t } from "i18next";

export default function Register() {
  return (
    <Layout>
      <Stack fontSize={30} gap={0}>
      <Box
      backgroundImage={"https://ik.imagekit.io/msxxxaegj/alitaLaunchAir/pattern1.png?updatedAt=1715492611878"}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      pt={{lg: "0vh", base: "10vh"}}
    >
      <VStack
        bg={"linear-gradient(182.26deg, rgba(0, 0, 0, 0) 1.9%, #380145 98.18%)"}
        h={{base: "120vh",lg: "100vh"}}
        justifyContent={"center"}
      >
        <Heading
          color={"white"}
          fontSize={{base: "2xl", lg: "5xl"}}
          textAlign={"center"}
        >
          {t("register.title")}
        </Heading>
        <Text
          fontFamily={"Poppins"}
          fontSize={{base: "15px", lg: "21px"}}
          mb={6}
          textAlign={"center"}
        >
          {t("register.subTitle")}
        </Text>
      <Card
            bg={"white"}
            rounded={{ base: "3xl", lg: "50px" }}
            w="full"
            mx="auto"
            maxW="4xl"
            overflow={"hidden"}
          >
            <CardBody
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              p="0"
            >
              <Box
                w={{ base: "full", lg: "50%" }}
                borderRight={{ base: "none", lg: "8px" }}
                color={"blackAlpha.300"}
                zIndex={"1"}
              >
                <Box
                  bg={"#9321DD"}
                  py={"20"}
                  zIndex={"99"}
                  bgImage="url('https://ik.imagekit.io/msxxxaegj/alitaLaunchAir/purplePattern.png?updatedAt=1715496806612')"
                  backgroundPosition={"center"}
                  backgroundSize={"contain"}
                >
                  <Image
                    src="https://ik.imagekit.io/msxxxaegj/alitaLaunchAir/Group.png?updatedAt=1715496974984"
                    alt="pattern2"
                    mx={"auto"}
                  />
                </Box>
              </Box>
              <Stack
                w={{ base: "full", lg: "50%" }}
                minH={"sm"}
                px={{ base: "4", md: "12" }}
                color={"brand.400"}
                borderLeft={{ base: "8px", lg: "none" }}
                borderColor={"blackAlpha.300"}
                pos={"relative"}
                justifyContent={"center"}
              >
                <RegisterForm />
              </Stack>
            </CardBody>
          </Card>
          </VStack>
          </Box>
      </Stack>
      <Footer />
    </Layout>
  );
}
