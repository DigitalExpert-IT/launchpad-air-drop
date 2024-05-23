import { AI_DECMIAL, USDT_DECIMAL } from "@/constants/tokenDecimals";
import { useAiCreditBalance, useUsdtCreditBalance } from "@/hooks/contract/airdrop";
import { useClaimAiMutation } from "@/hooks/contract/airdrop/useClaimAiMutation";
import { useAsyncCall } from "@/hooks/useAsyncCall";
import { Box, Button, Flex, Image, Text, Spinner } from "@chakra-ui/react";
import { useAddress, useSetIsWalletModalOpen } from "@thirdweb-dev/react";
import { fromBn } from "evm-bn";
import { useTranslation } from "react-i18next";

const CreditAssets = () => {
  const { t } = useTranslation();
  const openModal = useSetIsWalletModalOpen();
  const address = useAddress();
  const { data: usdtCreditbalance, isLoading: isLoadingUsdt } = useUsdtCreditBalance();
  const { data: aiCreditbalance, isLoading: isLoadingAi } = useAiCreditBalance();
  const { claim, isLoading: isClaimLoading } = useClaimAiMutation();

  const claimAi = async () => {
    await claim(100);
  };

  const { exec: execClaimAi } = useAsyncCall(claimAi,
    t("succes.claimAi"));

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
      >
        <Text fontSize={"18px"} minW={52}>{t("creditAssets.title")}</Text>
        <Box display={"flex"} gap={3} alignItems={"center"}>
          <Image
            src="/assets/usdt-with-bg.png"
            w={"29px"}
            h={"29px"}
            alt="usdt"
          />
          {isLoadingUsdt ? <Spinner /> :
            <Text fontSize={"20px"}> {fromBn(usdtCreditbalance?? "0", USDT_DECIMAL)}</Text>
          }
        </Box>
        <Box display={"flex"} gap={3} alignItems={"center"}>
          <Text fontSize={"20px"} background={"purple.400"} px={3} py={1} borderRadius={"full"}> AI </Text>
          {isLoadingAi ? <Spinner /> :
            <Text fontSize={"20px"}> {fromBn(aiCreditbalance?? "0", AI_DECMIAL)}</Text>
          }
        </Box>
      </Box>
      <Flex
        gap={10}
        backgroundColor={"#3C014A"}
        w={"fit-content"}
        px={5}
        py={3}
        mt={3}
        borderRadius={"12"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
          src="/assets/usdt-with-bg.png"
          w={"43px"}
          h={"43px"}
          alt="usdt"
        />
        <Text fontSize={"xl"}>AI</Text>
      </Flex>
      <Button bgColor={"#9321DD"} w={"100%"} borderRadius={"10px"} mt={8} isLoading={isClaimLoading} onClick={() => address ? execClaimAi() : openModal(true)}>
        {address ? t("creditAssets.button") : t("common.connectWallet")}
      </Button>
    </Box>
  );
};

export default CreditAssets;
