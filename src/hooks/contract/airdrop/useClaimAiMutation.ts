import { useContractWrite } from "@thirdweb-dev/react";
import { useAirdropContract } from "./useAirdropContract"
import { usePair24h } from "@/hooks/useCrypto";
import { toBn } from "evm-bn";

export const useClaimAiMutation = () => {
  const { contract } = useAirdropContract();
  const { mutateAsync: mutateAsyncClaim, ...rest } = useContractWrite(contract, "claimAi");

  const firstPair = "AI";
  const secondPair = "USDT";
  const { lastPrice } = usePair24h(`${firstPair}_${secondPair}`, 8000);

  const claim = async (_amount: Number) => {
    try {
      const { receipt } = await mutateAsyncClaim({ args: [_amount, toBn(lastPrice.toString(), 18)] })
      return receipt;
    } catch (error) {
      throw error;
    }
  }

  return { claim, ...rest };
}