import Layout from "@/components/layout";
import { Heading, Stack, VStack, Text, HStack, CardHeader, Flex, CardFooter, Input, Button } from "@chakra-ui/react";
import Footer from "./components/Footer";
import RegisterForm from "./components/RegisterForm";
import { Card, CardBody, Box, Image} from "@chakra-ui/react";
import Header from "./components/Header";
import { t } from "i18next";
import { KycCard } from "@/components/kycCard";
import { kycContent } from "@/constants/kyContent";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { EmailForm } from "@/components/emailForm";
import { useState } from "react";
import { PhoneForm } from "@/components/phoneForm";
import { backgroundImage } from "@/constants/backgroundImage";
import { PhotoForm } from "@/components/PhotoForm";

const kycMenu = [
  {component: <EmailForm/>},  
  {component: <PhoneForm/>},
  {component: <PhotoForm/>}
]

export default function Kyc() {
  const [kycProgres, setKycProgres] = useState<number>(0)

  return (
    <Layout>
      <Stack fontSize={30} gap={0}>
      <Box
      backgroundImage={backgroundImage[0].image}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      pt={{lg: "10vh", base: "10vh"}}
    >
      <VStack
        bg={"linear-gradient(182.26deg, rgba(0, 0, 0, 0) 1.9%, #380145 98.18%)"}
        h={{base: "150vh",lg: "100vh"}}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Flex flexDir={{lg: "row", base: "column"}} gap={5}>
          {kycContent.map((item, idx) => (
            <Flex flexDirection={{lg: "row", base: "column"}} key={idx} gap={5}>
                <KycCard title={item.title} description={item.description} validity={kycProgres === idx}/> 
              { idx < 2 && 
                (
                  <ArrowForwardIcon alignSelf={"center"} transform={{base: 'rotate(90deg)', lg: "rotate(0deg)"}} />
                )
              }
            </Flex>
          ))}
        </Flex>
        {kycMenu[kycProgres].component}
      </VStack>
      </Box>
      </Stack>
      <Footer />
    </Layout>
  );
}
