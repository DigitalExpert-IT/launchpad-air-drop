import Layout from "@/components/layout";
import { Stack, VStack, Flex } from "@chakra-ui/react";
import Footer from "./components/Footer";
import { Box} from "@chakra-ui/react";
import { KycCard } from "@/components/kycCard";
import { kycContent } from "@/constants/kyContent";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { EmailForm } from "@/components/emailForm";
import { useState } from "react";
import { PhoneForm } from "@/components/phoneForm";
import { backgroundImage } from "@/constants/backgroundImage";
import { PhotoForm } from "@/components/PhotoForm";
import React from "react";
import RegisterForm from "./components/RegisterForm";

export default function Kyc() {
  const [kycProgres, setKycProgres] = useState<number>(0)

  const handleNextStep = () => {
    setKycProgres((prev) => (prev < kycMenu.length - 1 ? prev + 1 : prev));
  };

  const handleBackward = () => {
    setKycProgres(kycProgres-1)
  }

  
  const kycMenu = [
    {component: <EmailForm handleNextStep={handleNextStep}/>},  
    {component: <PhoneForm handleNextStep={handleNextStep}/>},
    {component: <PhotoForm handleErrorKyc={handleBackward}/>}
  ]

  

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
                <KycCard title={item.title} description={item.description} validity={kycProgres > idx}/> 
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
