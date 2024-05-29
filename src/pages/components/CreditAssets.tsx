import { AI_DECMIAL, USDT_DECIMAL } from "@/constants/tokenDecimals";
import { useAiCreditBalance, useUsdtCreditBalance, useValidUser } from "@/hooks/contract/airdrop";
import { useClaimAiMutation } from "@/hooks/contract/airdrop/useClaimAiMutation";
import { useAsyncCall } from "@/hooks/useAsyncCall";
import { Box, Button, Flex, Image, Text, Spinner, Input, VStack, HStack, Heading } from "@chakra-ui/react";
import { useAddress, useSetIsWalletModalOpen } from "@thirdweb-dev/react";
import { fromBn } from "evm-bn";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setReferrer } from '@/redux/referrerSlice';
import { useForm } from "react-hook-form";
import { FormInput } from "@/lib/FormInput";
import { useEffect, useState } from "react";


interface FormType{
  referrer: string;
}

const CreditAssets = () => {
  const { t } = useTranslation();
  const {data} = useValidUser()
  const openModal = useSetIsWalletModalOpen();
  const router = useRouter();
  const address = useAddress();
  const [refInput, setRefInput] = useState<string>("")
  const { data: usdtCreditbalance, isLoading: isLoadingUsdt } = useUsdtCreditBalance();
  const { data: aiCreditbalance, isLoading: isLoadingAi } = useAiCreditBalance();
  const { claim, isLoading: isClaimLoading } = useClaimAiMutation();
  const dispatch = useDispatch()


  let refParam = null;
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search)
    refParam = urlParams.get("ref")
  }
  

  const claimAi = async () => {
    await claim(100);
  };

  const handleStart = (data: string) => {
    dispatch(setReferrer(data || "0x0000000000000"))
    router.push("/kyc")
  }

  const { exec: execClaimAi } = useAsyncCall(claimAi,
    t("succes.claimAi"));

  useEffect(() => {
    setRefInput(refParam || "")
  }, [refParam])

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
        <Text fontSize={{base: "14px", md: "18px"}} minW={{base: 40, md: 52}}>{t("creditAssets.title")}</Text>
        <Box display={"flex"} gap={{base: 1, md: 3}} alignItems={"center"} minW="fit-content">
          <Image
            src="/assets/usdt-with-bg.png"
            w={{base: "22px", md: "29px"}}
            h={{base: "22px", md: "29px"}}
            alt="usdt"
          />
          {isLoadingUsdt ? <Spinner /> :
            <Text fontSize={{base: "16px", md: "20px"}}>
              {fromBn(usdtCreditbalance?? "0", USDT_DECIMAL)}
            </Text>
          }
        </Box>
        <Box display={"flex"} gap={{base: 1, md: 3}} alignItems={"center"}  minW="fit-content">
          <Image
            src="/assets/ai-token.png"
            w={{base: "24px", md: "32px"}}
            h={{base: "24px", md: "32px"}}
            alt="usdt"
          />
          {isLoadingAi ? <Spinner /> :
            <Text fontSize={{base: "16px", md: "20px"}}>
              {fromBn(aiCreditbalance?? "0", AI_DECMIAL)}
            </Text>
          }
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
        <Image
          src="/assets/ai-token.png"
          w={"43px"}
          h={"43px"}
          alt="usdt"
        />
        <Text fontSize={"xl"} pr={"1rem"}>AI</Text>
      </Flex>
      {data === false &&
      <Box flex={1}>
        <Text fontSize={"xl"}>{t("form.label.referrerTitle")}</Text>
        <Input onChange={(e) => setRefInput(e.target.value)} name="referrer" value={refParam || refInput}  variant={"flushed"} size={"md"} w={"100%"} mt={2}/>
        <Text fontSize={{ base: "sm", lg: "sm" }} color={"white"}>
          {t("form.helperText.referrer")}
      </Text>
      </Box>
      }
      </HStack>
      {
        data === false ?
        <Button bgColor={"#9321DD"} w={"100%"} borderRadius={"10px"} mt={8} isLoading={isClaimLoading} onClick={() => address ? handleStart(refInput) : openModal(true)} type="submit">
          {address ? t("creditAssets.button") : t("common.connectWallet")}
        </Button>
        :
        <Button bgColor={"#9321DD"} w={"100%"} borderRadius={"10px"} mt={8} isLoading={isClaimLoading} onClick={() => address ? execClaimAi() : openModal(true)} type="submit">
          {address ? t("creditAssets.button") : t("common.connectWallet")}
        </Button>
      }
    </Box>
  );
};

export default CreditAssets;
