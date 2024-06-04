import { useContractWrite } from "@thirdweb-dev/react";
import { useAirdropContract } from "./useAirdropContract"
import { toBn } from "evm-bn";
import { usePair24h } from "@/hooks/useCrypto";
import { useAsyncCall } from "@/hooks/useAsyncCall";
import { useTranslation } from "react-i18next";

export const useRegisterMutation = () => {
  const { contract } = useAirdropContract();
  const { t } = useTranslation();
  const { mutateAsync: mutateAsyncRegister, ...rest } = useContractWrite(contract, "register");

  const firstPair = "AI";
  const secondPair = "USDT";
  const { lastPrice } = usePair24h(`${firstPair}_${secondPair}`, 8000);

  const registerContract = async (_referral: string, _uri: string,) => {
    try {
      const { receipt } = await mutateAsyncRegister({
        args: [_referral, _uri, toBn(lastPrice.toString(), 18)],
        overrides: { value: toBn("5", 18).div(BigInt("1000")) }
      });

      sessionStorage.removeItem("email");
      sessionStorage.removeItem("phone");
      sessionStorage.removeItem("local");
      sessionStorage.removeItem("userInfo");

      return receipt;
    } catch (error) {
      throw error;
    }
  };

  const { exec: register } = useAsyncCall(registerContract, t("success.register"));

  return { register, ...rest };
}