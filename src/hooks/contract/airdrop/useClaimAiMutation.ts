import { useContractWrite } from "@thirdweb-dev/react";
import { useAirdropContract } from "./useAirdropContract";
import { toBn } from "evm-bn";

export const useClaimAiMutation = (lastPrice: number) => {
  const { contract } = useAirdropContract();
  const { mutateAsync: mutateAsyncClaim, ...rest } = useContractWrite(contract, "claimAi");

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