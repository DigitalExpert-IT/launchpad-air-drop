import { useContractWrite } from "@thirdweb-dev/react";
import { useAirdropContract } from "./useAirdropContract"
import { toBn } from "evm-bn";
import { usePair24h } from "@/hooks/useCrypto";

export const useRegisterMutation = () => {
  const { contract } = useAirdropContract();
  const { mutateAsync: mutateAsyncRegister, ...rest } = useContractWrite(contract, "register");

  const firstPair = "AI";
  const secondPair = "USDT";
  const { lastPrice } = usePair24h(
    firstPair.concat(secondPair), 8000
  );

  const register = async (_referral: string, _uri: string,) => {
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
  }

  return { register, ...rest };
}