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

export default function Launchpad() {
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
          <Text fontSize={22}>Wallet Address</Text>
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
              Token Name
            </Text>
            <Text fontSize={22} color={"#A4A4BE"}>
              BSCM
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"700"} fontSize={24}>
              Contract Address
            </Text>
            <Text fontSize={22} color={"#A4A4BE"}>
              0x021931u2hedqwugd0182gduig3d1d1dvef2
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"700"} fontSize={24}>
              Remaining Airdrops
            </Text>
            <Text fontSize={22} color={"#A4A4BE"}>
              70%
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"700"} fontSize={24}>
              Sliding Points
            </Text>
            <Text fontSize={22} color={"#A4A4BE"}>
              72%
            </Text>
          </Box>
        </Stack>
        <Stack gap={5}>
          <Box>
            <Text fontWeight={"bold"} fontSize={32} color={"#FD92FD"}>
              Token Allocation
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"700"} fontSize={24}>
              Contract Address
            </Text>
            <Text fontSize={22} color={"#A4A4BE"}>
              0x021931u2hedqwugd0182gduig3d1d1dvef2
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"700"} fontSize={24}>
              Remaining Airdrops
            </Text>
            <Text fontSize={22} color={"#A4A4BE"}>
              70%
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"700"} fontSize={24}>
              Sliding Points
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
            Airdrop Time: 4/5/2024, 6:00:00 PM
          </Text>
        </Box>
      </VStack>
      <VStack minW={"75%"} flexDir={"row"} justifyContent={"space-between"}>
        <Flex flexDir={{ lg: "row", base: "column" }} gap={5}>
          <Button bgColor="#9321DD" fontSize={24}>
            Receive
          </Button>
          <Button bgColor="#9321DD" fontSize={24}>
            AI Recognition Verification
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
              Investment rules:
            </Text>
          </Box>
          <Box>
            <Text fontSize={24}>
              Zero risk investment model: Leading the innovative investment
              concept of “only earning without losing”, ensuring the safety of
              user capital, regardless of market fluctuations.
            </Text>
          </Box>
          <Box>
            <Text fontSize={24}>
              Users can make a one-time purchase through AI facial recognition,
              authorizing them to hold 1000 USDT of spot goods, with 30% of the
              closing profit and 20% of the closing profit for free.
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
