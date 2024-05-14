import Layout from "@/components/layout";
import { Heading, Stack, VStack, Text, HStack, CardHeader, Flex } from "@chakra-ui/react";
import Footer from "./components/Footer";
import RegisterForm from "./components/RegisterForm";
import { Card, CardBody, Box, Image} from "@chakra-ui/react";
import Header from "./components/Header";
import { t } from "i18next";
import { KycCard } from "@/components/kycCard";
import { kycContent } from "@/constants/kyContent";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Kyc() {
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
        <Flex flexDir={{lg: "row", base: "column"}} gap={5}>
          {kycContent.map((item, idx) => (
            <HStack key={idx}>
              <KycCard title={item.title} description={item.description} validity={item.validity}/>
              { idx < 2 && 
                (
                  <ArrowForwardIcon/>
                )
              }
            </HStack>
          ))}
        </Flex>
      </VStack>
      </Box>
      </Stack>
      <Footer />
    </Layout>
  );
}
