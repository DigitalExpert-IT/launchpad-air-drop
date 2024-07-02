import "@fontsource/rubik-one";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Th,
  Tr,
  VStack,
  useClipboard,
  useToast,
  Divider,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useUserAsset } from "@/hooks/contract/airdrop/useUserAsset";
import { formatPrice } from "@/utils/formatter";
import { useMobileScreen } from "@/hooks/useMobileScreen";
import { useAddress } from "@thirdweb-dev/react";

export default function AssetProfit() {
  const { t } = useTranslation();
  const toast = useToast();
  const address = useAddress();
  const myRef = `https://sleeplessailabs.org/?ref=${address}`;
  const { profitLoss, currentAssetValue, lastPrice, volume, dummyReward, oneReward} = useUserAsset();
  const isMobileScreen = useMobileScreen();
  const { onCopy } = useClipboard(myRef);
  
  const handlerCopy = () => {
    onCopy();
    toast({
      title: 'Copied.',
      description: "Referral Address Copied",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };
  

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
        <Stack align={isMobileScreen ? "center" : ""} mt={10} my={10} gap={5} minW={"80%"}>
          <Heading alignSelf={"center"}>{t("userAsset.title")}</Heading>
          <Flex justifyContent={"space-between"}>
            <HStack />
            <HStack gap={10}>
              <Text fontSize={20} color={"white"}>
              {t("userAsset.hold")}
              </Text>
              <HStack>
                <Image
                  src="/assets/usdt-with-bg.png"
                  w={{ base: "22px", md: "20px" }}
                  h={{ base: "22px", md: "20px" }}
                  alt="owned sleepless value"
                />
                <Text fontSize={15}>{currentAssetValue || 0}</Text>
              </HStack>
            </HStack>
          </Flex>
          <Box
            background={"black"}
            borderRadius={"30px"}
            border={"1px solid #A4A4BE"}
            w={"100%"}
          >
            {isMobileScreen ? (
              <HStack>
                <TableContainer
                  borderLeftRadius={"30px"}
                  background={"#1E1E1E"}
                  borderRight={"2px"}
                  minW={"40%"}
                  borderColor={"#A4A4BE"}
                  overflow={"hidden"}
                >
                  <Table borderRadius={"30px"} minH={"40vh"}>
                    <Tbody>
                      <Tr>
                        <Td
                          background={"#1E1E1E"}
                        >
                          <Box display="flex" flexDirection="column" gap={9} fontSize={15}>
                            <Box>{t("userAsset.tableTitle1")}</Box>
                            <Box>{t("userAsset.tableTitle2")}</Box>
                            <Box>{t("userAsset.tableTitle3")}</Box>
                            <Box>{t("userAsset.tableTitle4")}</Box>
                            <Box>{t("userAsset.tableTitle5")}</Box>
                          </Box>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
                <TableContainer textAlign={"center"} borderRadius={"30px"}>
                  <Table>
                    <Tbody>
                      <Tr>
                        <Td background={"black"}>
                          <Box display="flex" flexDirection="column" gap={9}>
                            <Box>Sleepless/USDT</Box>
                            <Box>
                              <HStack>
                                <Image
                                  src="/assets/usdt-with-bg.png"
                                  w={{ base: "22px", md: "20px" }}
                                  h={{ base: "22px", md: "20px" }}
                                  alt="owned sleepless value"
                                />
                                <Text>{profitLoss | 0}</Text>
                              </HStack>
                            </Box>
                            <Box>
                              <HStack>
                                <Text>{formatPrice(volume)}</Text>
                              </HStack>
                            </Box>
                            <Box>
                              <HStack>
                                <Text>{formatPrice(lastPrice)}</Text>
                              </HStack>
                            </Box>
                            <Box>
                              <Button
                                size={"sm"}
                                borderRadius={"8"}
                                backgroundColor={"#9321DD"}
                                disabled
                              >
                                <Box>{t("userAsset.sell")}</Box>
                              </Button>
                            </Box>
                          </Box>
                        </Td>
                        {oneReward.splice(0).reverse().map((item, key) => (
                          item.referrer >= 0 ? (
                        <><Td textAlign="center">
                            <Box display="flex" alignItems="center" justifyContent="center">
                              <Text color={"#FD92FD"} fontWeight={"bold"} transform={"rotate(-90deg)"} fontSize={"2xl"}>{t("userAsset.marketingTitle")}</Text>
                            </Box>
                          </Td><Td key={key} background={"black"}>
                              <Box display="flex" flexDirection="column" gap={9}>
                                <Box>{item.referrer >= 0 ? item.referrer + " " + t("userAsset.referrer") : 0}</Box>
                                <Box>
                                  <HStack>
                                    <Image
                                      src="/assets/usdt-with-bg.png"
                                      w={{ base: "22px", md: "20px" }}
                                      h={{ base: "22px", md: "20px" }}
                                      alt="owned sleepless value" />
                                    <Text>{item.expectProfLos | 0}</Text>
                                  </HStack>
                                </Box>
                                <Box>
                                  <HStack>
                                    <Text>{formatPrice(volume)}</Text>
                                  </HStack>
                                </Box>
                                <Box>
                                  <HStack>
                                    <Text>{formatPrice(lastPrice)}</Text>
                                  </HStack>
                                </Box>
                                <Box>
                                  <Button
                                    size={"sm"}
                                    borderRadius={"8"}
                                    backgroundColor={"#9321DD"}
                                    onClick={handlerCopy}
                                  >
                                    <Box>{t("userAsset.invite")}</Box>
                                  </Button>
                                </Box>
                              </Box>
                            </Td></>
                          ) : (
                            null
                          )
                          ))}
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </HStack>
            ) : (
              <TableContainer borderRadius={"30px"}>
      <Table>
        <Thead background={"#1E1E1E"}>
          <Tr>
            <Th></Th>
            <Th>{t("userAsset.tableTitle2")}</Th>
            <Th>{t("userAsset.tableTitle3")}</Th>
            <Th>{t("userAsset.tableTitle4")}</Th>
            <Th>{t("userAsset.tableTitle5")}</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Sleepless/USDT</Td>
            <Td>
              <HStack>
                <Image
                  src="/assets/usdt-with-bg.png"
                  w={{ base: "22px", md: "20px" }}
                  h={{ base: "22px", md: "20px" }}
                  alt="owned sleepless value"
                />
                <Text>{profitLoss | 0}</Text>
              </HStack>
            </Td>
            <Td>
              <HStack>
                <Text>{formatPrice(volume)}</Text>
              </HStack>
            </Td>
            <Td>
              <HStack>
                <Text>{formatPrice(lastPrice)}</Text>
              </HStack>
            </Td>
            <Td>
              <Button
                size={"sm"}
                borderRadius={"8"}
                backgroundColor={"#9321DD"}
                disabled
              >
                {t("userAsset.sell")}
              </Button>
            </Td>
          </Tr>
          {oneReward.toReversed().map((item, idx) => (
            item.referrer >0 ? (
            <><Tr>
                <Td colSpan={5} textAlign="center">
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <Divider flex="1" borderColor="gray.300" opacity={"20%"} />
                    <Text mx={4} color={"#FD92FD"} fontWeight={"bold"} fontSize={"2xl"}>{t("userAsset.marketingTitle")}</Text>
                    <Divider flex="1" borderColor="gray.300" opacity={"20%"} />
                  </Box>
                </Td>
              </Tr><Tr key={idx}>
                  <Td>{item.referrer >= 0 ? item.referrer + " " + t("userAsset.referrer") : 0}</Td>
                  <Td>
                    <HStack>
                      <Image
                        src="/assets/usdt-with-bg.png"
                        w={{ base: "22px", md: "20px" }}
                        h={{ base: "22px", md: "20px" }}
                        alt="owned sleepless value" />
                      <Text>{item.expectProfLos | 0}</Text>
                    </HStack>
                  </Td>
                  <Td>
                    <HStack>
                      <Text>{formatPrice(volume)}</Text>
                    </HStack>
                  </Td>
                  <Td>
                    <HStack>
                      <Text>{formatPrice(lastPrice)}</Text>
                    </HStack>
                  </Td>
                  <Td>
                    <Button
                      size={"sm"}
                      borderRadius={"8"}
                      backgroundColor={"#9321DD"}
                      onClick={handlerCopy}
                    >
                      {t("userAsset.invite")}
                    </Button>
                  </Td>
                </Tr></>
            ) : (null)
          ))}
        </Tbody>
      </Table>
    </TableContainer>
            )}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
