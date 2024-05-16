import { useContractWrite } from "@thirdweb-dev/react";
import { useAirdropContract } from "./useAirdropContract"

export const useDropTokenMutation = () => {
  const { contract } = useAirdropContract();
  const { mutateAsync: mutateAsyncDropToken, ...rest } = useContractWrite(contract, "dropToken");

  const dropToken = async (_tokenAddress: string, _amount: Number) => {
    try {
      const { receipt } = await mutateAsyncDropToken({ args: [_tokenAddress, _amount] });
      return receipt;
    } catch (error) {
      throw error;
    }
  }

  return { dropToken, ...rest };
}