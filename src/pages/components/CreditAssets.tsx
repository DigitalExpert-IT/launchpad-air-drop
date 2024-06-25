import { AI_DECMIAL, USDT_DECIMAL } from "@/constants/tokenDecimals";
import {
  useAiCreditBalance,
  useAirdropContract,
  useUsdtCreditBalance,
  useValidUser,
} from "@/hooks/contract/airdrop";
import { useClaimAiMutation } from "@/hooks/contract/airdrop/useClaimAiMutation";
import { useAsyncCall } from "@/hooks/useAsyncCall";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Spinner,
  Input,
  HStack,
  useToast,
  Tooltip,
} from "@chakra-ui/react";
import { useSetIsWalletModalOpen } from "@thirdweb-dev/react";
import { fromBn } from "evm-bn";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setReferrer } from "@/redux/referrerSlice";
import { useEffect, useState } from "react";
import { useRegisterMutation } from "@/hooks/contract/airdrop/useRegisterMutation";
import { RootState } from "@/redux/store";
import { usePair24h } from "@/hooks/useCrypto";
import { TransactionButton, useActiveAccount, useConnectModal } from "thirdweb/react";
import { clientId } from "@/constants/clientId";
import { prepareContractCall } from "thirdweb";

type TUserInfo = {
  facialId: string;
  timestamp: number;
  details: {
    age: number;
    gender: string;
  };
};

const CreditAssets = () => {
  const { t } = useTranslation();
  const contract  = useAirdropContract();
  const { connect, isConnecting } = useConnectModal();
  const client = clientId;
  const router = useRouter();
  const address = useActiveAccount();
  const toast = useToast();
  const [userInfo, setUserInfo] = useState<TUserInfo | null>(null);
  const [refInput, setRefInput] = useState<string | null>(null);
  const { data: usdtCreditbalance, isLoading: isLoadingUsdt } =
    useUsdtCreditBalance();
  const { data: aiCreditbalance, isLoading: isLoadingAi } =
    useAiCreditBalance();
    const { lastPrice } = usePair24h("AI", "USDT", 8000);  
  const { claim } = useClaimAiMutation(lastPrice);
  const referrer = useSelector((state: RootState) => state.referrer.referrer);
  const dispatch = useDispatch();
  const { register } = useRegisterMutation(lastPrice);
  const { data: isValidUser } = useValidUser();
  console.log("valid", isValidUser)
  let refParam = null;



  const handleConnect = () => {
    const wallet = connect({ client }); // opens the connect modal
  }

  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);

    refParam = urlParams.get("ref");
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const session_userInfo = sessionStorage.getItem("userInfo");
      setUserInfo(session_userInfo ? JSON.parse(session_userInfo) : null);
    }
  }, []);

  const handle0AiToast = () => {
    toast({
      title: 'Warning',
      description: t("creditAssets.0aiPrice"),
      status: 'warning',
      duration: 5000,
      isClosable: true,
    })
  }

  const claimAi = async () => {
    await claim(100);
  };

  const handleStart = (data: string) => {
    dispatch(setReferrer(data || "0x0000000000000000000000000000000000000000"));
    router.push("/kyc");
  };

  const handleClaimAi = async () => {
    if (!address?.address) return handleConnect();
    if (userInfo?.facialId && !isValidUser) {
      try {
        await register(
          refParam || referrer || "0x0000000000000000000000000000000000000000",
          `user-${address?.address}`
        );
      } catch (error: any) {
        toast({ status: "error", description: error?.reason });
      }

      return;
    }
    await execClaimAi();
  };

  const { exec: execClaimAi } = useAsyncCall(claimAi, t("succes.claimAi"));

  useEffect(() => {
    setRefInput(refParam || "");
  }, [refParam]);

  return (
    <Box
      background={"black"}
      borderRadius={"15px"}
      p={5}
      boxShadow={"2px 2px 25.8px 0px #9321dd4a"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        w={{ base: "90%", sm: "400px" }}
        gap={2}
      >
        <Text
          fontSize={{ base: "14px", md: "18px" }}
          minW={{ base: 40, md: 52 }}
        >
          {t("creditAssets.title")}
        </Text>
        <Box
          display={"flex"}
          gap={{ base: 1, md: 3 }}
          alignItems={"center"}
          minW="fit-content"
        >
          <Image
            src="/assets/usdt-with-bg.png"
            w={{ base: "22px", md: "29px" }}
            h={{ base: "22px", md: "29px" }}
            alt="usdt"
          />
          {isLoadingUsdt ? (
            <Spinner />
          ) : (
            <Text fontSize={{ base: "16px", md: "20px" }}>
              {!isValidUser
                ? 100
                : fromBn(usdtCreditbalance ?? "0", USDT_DECIMAL)}
            </Text>
          )}
        </Box>
        <Box
          display={"flex"}
          gap={{ base: 1, md: 3 }}
          alignItems={"center"}
          minW="fit-content"
        >
          <Image
            src="/assets/ai-token.png"
            w={{ base: "24px", md: "32px" }}
            h={{ base: "24px", md: "32px" }}
            alt="usdt"
          />
          {isLoadingAi ? (
            <Spinner />
          ) : (
            <Text fontSize={{ base: "16px", md: "20px" }}>
              {fromBn(aiCreditbalance ?? "0", AI_DECMIAL)}
            </Text>
          )}
        </Box>
      </Box>
      <HStack minW={"100%"} my={8} gap={5}>
        <Flex
          gap={10}
          backgroundColor={"#3C014A"}
          w={"fit-content"}
          px={5}
          py={7}
          mt={3}
          borderRadius={"12"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image src="/assets/ai-token.png" w={"43px"} h={"43px"} alt="usdt" />
          <Text fontSize={"xl"} pr={"1rem"}>
            AI
          </Text>
        </Flex>
        {!isValidUser && !userInfo && (
          <Box flex={1}>
            <Text fontSize={"xl"}>{t("form.label.referrerTitle")}</Text>
            <Input
              onChange={(e) => setRefInput(e.target.value)}
              name="referrer"
              value={refParam || refInput || ""}
              variant={"flushed"}
              size={"md"}
              w={"100%"}
              mt={2}
            />
            <Text fontSize={{ base: "sm", lg: "sm" }} color={"white"}>
              {t("form.helperText.referrer")}
            </Text>
          </Box>
        )}
      </HStack>
      {!isValidUser && !userInfo?.facialId ? (
        <Tooltip label={lastPrice === 0 && address?.address !== undefined ? t("creditAssets.0aiPrice") : ""}>
          <Box onClick={lastPrice === 0 && address?.address !== undefined ? () => handle0AiToast() : () => undefined} style={{ position: 'relative' }}>
          <Button
            bgColor={"#9321DD"}
            w={"100%"}
            borderRadius={"10px"}
            mt={8}
            // isDisabled={lastPrice === 0 && address?.address !== undefined}
            _disabled={{
              cursor: "not-allowed",
              bgColor: "#1E1E1E"
            }}
            onClick={() =>
              address?.address ? handleStart(refInput ?? "") : handleConnect()
            }
            type="submit"
          >
            {address?.address ? t("creditAssets.unregister") : t("common.connectWallet")}
          </Button>
          </Box>
        </Tooltip>
      ) : (
        <Tooltip label={lastPrice === 0 ? t("creditAssets.0aiPrice") : ""}>
          <Box onClick={lastPrice === 0 ? () => handle0AiToast() : () => undefined} style={{ position: 'relative' }}>
          <Button
            bgColor={"#9321DD"}
            w={"100%"}
            borderRadius={"10px"}
            mt={8}
            // isDisabled={lastPrice === 0 || !lastPrice }
            _disabled={{
              cursor: "not-allowed",
              bgColor: "#1E1E1E",
            }}
            onClick={handleClaimAi}
            type="submit"
          >
            {address?.address ? t("creditAssets.button") : t("common.connectWallet")}
          </Button>
          </Box>
        </Tooltip>
      )}
    </Box>
  );
};

export default CreditAssets;
