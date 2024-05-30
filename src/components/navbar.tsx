import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  IconButton,
  useDisclosure,
  useClipboard,
  HStack,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { HamburgerIcon, CopyIcon } from "@chakra-ui/icons";
import MenuDrawer from "@/components/menuDrawer";
import WalletButton from "@/components/WalletButton";
import { INavigation } from "@/constants/navigation";
import { useAddress } from "@thirdweb-dev/react";
import { shortenAddress } from "@/lib/address";
import { useAiCreditBalance, useUsdtCreditBalance, useValidUser } from "@/hooks/contract/airdrop";
import { useRouter } from "next/router";
import { AI_DECMIAL, USDT_DECIMAL } from "@/constants/tokenDecimals";
import { fromBn } from "evm-bn";
import { t } from "i18next";

interface INavbar {
  data: INavigation[];
}

function scrollFilter() {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;

  return winScroll ? 5 : 0;
}

const MenuList: React.FC<INavbar> = ({ data }) => {
  return (
    <>
      {data.map((item, idx) => (
        <Link key={idx} href={item.link} _hover={{ textDecoration: "none" }}>
          <Text
            textAlign={"center"}
            fontSize="xl"
            py={2}
            _hover={{ 
              color: "yellow" 
            }}
          >
            {item.name.toUpperCase()}
          </Text>
        </Link>
      ))}
    </>
  );
};

const NavbarButtons = () => {
  return (
    <Flex flexDirection={{ base: "column", sm: "row" }} gap={{ base: 6, sm: 2 }} mt={{ base: 8, sm: "unset" }}> 
      <WalletButton />
    </Flex>
  );
};

const Navbar: React.FC<INavbar> = ({ data }) => {
  const [filter, setFilter] = useState(0);
  const {data: userValid} = useValidUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const address = useAddress();
  const router = useRouter();
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "";
  const myRef = `http://localhost:3000/?ref=${address}`;
  const { data: usdtCreditbalance, isLoading: isLoadingUsdt } = useUsdtCreditBalance();
  const { data: aiCreditbalance, isLoading: isLoadingAi } = useAiCreditBalance();
  const { onCopy } = useClipboard(myRef);
  

  useEffect(() => {
    const onScroll = () => {
      setFilter(scrollFilter());
    };

    document.body.addEventListener("scroll", onScroll);

    return () => {
      document.body.removeEventListener("scroll", onScroll);
    };
  }, []);

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
    <Center
      style={{ backdropFilter: `blur(${filter}px)` }}
      position={"fixed"}
      w={"100%"}
      zIndex={"20"}
    >
      <Stack as={"nav"} w={"full"} mt={12} top={"0"} justifyContent={"center"}>
        <Container maxW={"container.xl"}>
          <Box display={"flex"} alignItems={"center"}>
            <Box
              display={"flex"}
              justifyContent={{ base: "start", md: "space-between" }}
              width={"100%"}
            >
              <Heading
                background={
                  "linear-gradient(100.36deg, #FD92FD 2.4%, #9321DD 98.97%)"
                }
                fontFamily={"Rubik One"}
                fontSize={"25px"}
                bgClip="text"
                flex={1}
                alignSelf={"center"}
              >
                <Link href="/">SLEEPLESS AI</Link>
              </Heading>
              <Stack
                flex={2}
                justify={"space-around"}
                align={"center"}
                direction={"row"}
                display={{ base: "none", lg: "flex" }}
                fontFamily={"Poppins"}
                fontWeight={"300"}
              >
                <MenuList data={data} />
                <Button variant={"unstyled"} onClick={onOpen} fontWeight={"light"}>
                  PROFILE
                </Button>
              </Stack>
              <Stack
                flex={1}
                justify={"end"}
                align={"center"}
                direction={"row"}
                spacing={"4rem"}
                display={{ base: "none", lg: "flex" }}
              >
                <NavbarButtons />
              </Stack>
            </Box>
            <IconButton
              display={{ base: "flex", lg: "none" }}
              onClick={onOpen}
              icon={<HamburgerIcon fontSize={"4xl"} color={"white"} />}
              aria-label="Open Menu"
            />
            <MenuDrawer isOpen={isOpen} onClose={onClose}>
              <Box>
                <Heading
                  background={
                    "linear-gradient(100.36deg, #FD92FD 2.4%, #9321DD 98.97%)"
                  }
                  fontFamily={"Rubik One"}
                  fontSize={"25px"}
                  mb={2}
                  flex={1}
                  bgClip={"text"}
                  textAlign={"center"}
                >
                  <Link href="/">SLEEPLESS AI</Link>
                </Heading>
              </Box>
              <MenuList data={data} />
              <Stack gap={10} mt={10} textAlign={"center"} >
                <Box alignSelf={"center"}>
                  <NavbarButtons />
                </Box>
                <Box>
                  <HStack gap={3} justifyContent={"center"}>
                    <Text fontWeight={"bold"} fontSize={"md"} gap={10}>{t("navbar.titleInvitationTitle")}</Text>
                    <CopyIcon onClick={() => userValid ? handlerCopy() : router.push("/kyc")} cursor={"pointer"}/>
                  </HStack>
                    <Button variant={"link"} onClick={() => userValid ? handlerCopy() : router.push("/kyc")} fontSize={{base: "xs", lg: "sm"}} pl={{base: 0, lg: 0}} textColor={"#A4A4BE"}>{userValid ? address : t("navbar.pleaseConnectWallet")}</Button>
                </Box>
                <Stack>
                  <Text fontWeight={"bold"} fontSize={"md"} gap={10}>{t("navbar.accountTitle")}</Text>
                  <Flex direction={{base: "column", lg: "row"}} justifyContent={"space-between"} textColor={"#A4A4BE"} mb={2}>
                    <Text py={1}>{t("navbar.usdt")}</Text>
                    {isLoadingUsdt ? <Spinner mx={"auto"} /> :
                        <Text fontSize={{base: "16px", md: "20px"}}>
                          {userValid === false ? 100 : fromBn(usdtCreditbalance?? "0", USDT_DECIMAL)} USDT
                        </Text>
                      }
                  </Flex>
                  <Flex direction={{base: "column", lg: "row"}} justifyContent={"space-between"} textColor={"#A4A4BE"}>
                    <Text py={1}>{t("navbar.ai")}</Text>
                    {isLoadingAi ? <Spinner mx={"auto"} /> :
                      <Text fontSize={{base: "16px", md: "20px"}}>
                        {fromBn(aiCreditbalance?? "0", AI_DECMIAL)} AI
                      </Text>
                    }
                  </Flex>
                </Stack>
                <Stack>
                  <Text fontWeight={"bold"} fontSize={"md"} gap={10}>{t("navbar.registrationStatus")}</Text>
                  <Flex direction={{base: "column", lg: "row"}} justifyContent={"space-between"} textColor={"#A4A4BE"}>
                    <Text>{t("navbar.facialStatus")}</Text>
                    <Text textColor={userValid ? "#77DB89": "#DA180D"} >{userValid ? t("common.authenticated") : t("common.unauthenticated") }</Text>
                  </Flex>
                </Stack>
              </Stack>
            </MenuDrawer>
          </Box>
        </Container>
      </Stack>
    </Center>
  );
};

export default Navbar;