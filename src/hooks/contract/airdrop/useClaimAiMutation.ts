import { useContractWrite } from "@thirdweb-dev/react";
import { useAirdropContract } from "./useAirdropContract"

export const useClaimAiMutation = () => {
  const { contract } = useAirdropContract();
  const { mutateAsync: mutateAsyncClaim, ...rest } = useContractWrite(contract, "claimAi");

  const claim = async (_amount: Number) => {
    try {
      const { receipt } = await mutateAsyncClaim({ args: [_amount] })
      return receipt;
    } catch (error) {
      throw error;
    }
  }

  return { claim, ...rest };
}