import "@fontsource/rubik-one";
import { Heading, Stack, Text, VStack, Image, Box, ListItem, OrderedList, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Button, HStack, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useUserAsset } from "@/hooks/contract/airdrop/useUserAsset";
import { formatPrice } from "@/utils/formatter";

export default function AssetProfit() {
  const { t } = useTranslation();
  const { profitLoss, currentAssetValue, lastPrice, volume } = useUserAsset();

  return (
    <Box>
      <Box
        backgroundPosition={"center"}
        backgroundSize={"cover"}
        position={"relative"}
        minH={"60vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack align={"center"} mt={10} gap={5} minW={"80%"}>
          <Heading>{t("userAsset.title")}</Heading>
          <Flex w={"100%"} justifyContent={"space-between"}>
            <HStack/>
            <HStack gap={10}>
              <Text fontSize={20} color={"white"}>Sleepless Hold</Text>
              <HStack>
                <Image src="/assets/usdt-with-bg.png" 
                w={{ base: "22px", md: "20px" }}
                h={{ base: "22px", md: "20px" }}
                alt="owned sleepless value"/>
                <Text fontSize={15}>
                {currentAssetValue | 0}
                </Text>
              </HStack>
            </HStack>
          </Flex>
          <Box
            background={"black"}
            borderRadius={"30px"}
            border={"1px solid #A4A4BE"}
            minW={"100%"}
            mx={10}
          >
            <TableContainer borderRadius={"30px"} overflow={"hidden"}>
              <Table w={"full"}>
                <Thead background={"#1E1E1E"}>
                  <Tr>
                    <Th></Th>
                    <Th>Profit/Loss</Th>
                    <Th>Trade Volume</Th>
                    <Th>Current Price</Th>
                    <Th>Operation</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Sleepless/USDT</Td>
                    <Td>
                      <HStack>
                        <Image src="/assets/usdt-with-bg.png" 
                        w={{ base: "22px", md: "20px" }}
                        h={{ base: "22px", md: "20px" }}
                        alt="owned sleepless value"/>
                        <Text>
                          {profitLoss | 0}
                        </Text>
                      </HStack>
                    </Td>
                    <Td>
                    <HStack>
                        <Image src="/assets/usdt-with-bg.png" 
                        w={{ base: "22px", md: "20px" }}
                        h={{ base: "22px", md: "20px" }}
                        alt="owned sleepless value"/>
                        <Text>
                          {formatPrice(volume)}
                        </Text>
                      </HStack>
                    </Td>
                    <Td>
                    <HStack>
                        <Image src="/assets/usdt-with-bg.png" 
                        w={{ base: "22px", md: "20px" }}
                        h={{ base: "22px", md: "20px" }}
                        alt="owned sleepless value"/>
                        <Text>
                          {formatPrice(lastPrice)}
                        </Text>
                      </HStack>
                    </Td>
                    <Td>
                      <Button size={"sm"} borderRadius={"8"} backgroundColor={"#9321DD"} disabled>
                        Sell
                      </Button>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
