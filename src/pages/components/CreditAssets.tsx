import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

const CreditAssets = () => {
  return (
    <Box background={"black"} borderRadius={"15px"} p={5} boxShadow={'2px 2px 25.8px 0px #9321dd4a'}>
      <Box display={"flex"} justifyContent={"space-between"} w={"400px"}>
        <Text fontSize={"18px"}>Credit Assets</Text>
        <Box display={"flex"} gap={3} alignItems={"center"}>
          <Box
            p={1}
            background={"#26A17B"}
            height={"fit-content"}
            borderRadius={"20px"}
          >
            <Image src="/assets/usdt.png" w={"12px"} h={"12px"} alt="usdt" />
          </Box>
          <Text fontSize={"20px"}>0.00</Text>
        </Box>
      </Box>
      <Flex
        gap={10}
        backgroundColor={"#3C014A"}
        w={"fit-content"}
        p={3}
        mt={3}
        borderRadius={"12"}
      >
        <Box
          p={1}
          background={"#26A17B"}
          height={"fit-content"}
          borderRadius={"20px"}
        >
          <Image src="/assets/usdt.png" w={"20px"} h={"20px"} alt="usdt" />
        </Box>
        <Text fontSize={"xl"}>USDT</Text>
      </Flex>
      <Button bgColor={"#9321DD"} w={'100%'} borderRadius={'10px'} mt={8}>Connect Wallet</Button>
    </Box>
  );
};

export default CreditAssets;
