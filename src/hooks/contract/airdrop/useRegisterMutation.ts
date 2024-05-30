import { useAddress, useContractWrite } from "@thirdweb-dev/react";
import { useApproveMutation, useBnbBalance, useBnbContract } from "../bnb";
import { useAirdropContract } from "./useAirdropContract"
import { toBn } from "evm-bn";
import { usePair24h } from "@/hooks/useCrypto";

export const useRegisterMutation = () => {
  const address = useAddress();
  const { contract } = useAirdropContract();
  const { contract: bnbContract } = useBnbContract();
  const bnbBalance = useBnbBalance();
  const { mutateAsync: mutateAsyncApprove } = useApproveMutation();
  const { mutateAsync: mutateAsyncRegister, ...rest } = useContractWrite(contract, "register");

  const firstPair = "AI";
  const secondPair = "USDT";
  const { lastPrice } = usePair24h(
    firstPair.concat(secondPair), 8000
  );

  const register = async (_referral: string, _uri: string,) => {

    console.log("last price regis", toBn(lastPrice.toString(), 18));

    try {
      const { receipt } = await mutateAsyncRegister({
        args: [_referral, _uri, toBn(lastPrice.toString(), 18)],
        overrides: { value: toBn("5", 18).div(BigInt("1000")) }
      })

      console.log("receipt", receipt);

      return receipt;
    } catch (error) {
      throw error;
    }
  }

  return { register, ...rest };
}