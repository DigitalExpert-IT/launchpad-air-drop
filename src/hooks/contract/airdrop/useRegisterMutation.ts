import { useContractWrite } from "@thirdweb-dev/react";
import { useAirdropContract } from "./useAirdropContract"
import { toBn } from "evm-bn";
import { useAsyncCall } from "@/hooks/useAsyncCall";
import { useTranslation } from "react-i18next";

export const useRegisterMutation = (lastPrice: number) => {
  const { contract } = useAirdropContract();
  const { t } = useTranslation();
  const { mutateAsync: mutateAsyncRegister, ...rest } = useContractWrite(contract, "register");

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