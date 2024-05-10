import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import CreditAssets from "./CreditAssets";

const Header = () => {
  return (
    <Box
      backgroundImage={"assets/bg-header.png"}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
    >
      <VStack
        bg={"linear-gradient(182.26deg, rgba(0, 0, 0, 0) 1.9%, #380145 98.18%)"}
        h={"100vh"}
        justifyContent={"center"}
      >
        <Heading
          background={
            "linear-gradient(100.36deg, #FD92FD 2.4%, #9321DD 98.97%)"
          }
          fontFamily={"Rubik One"}
          fontSize={"5xl"}
          bgClip="text"
        >
          ALITA AI
        </Heading>
        <Text fontFamily={"Poppins"} fontSize={"22px"} mb={6}>
          A worry free investment platform
        </Text>
        <CreditAssets />
      </VStack>
    </Box>
  );
};

export default Header;
