import { useAddress, useContractRead } from "@thirdweb-dev/react";
import { useAirdropContract } from "./useAirdropContract";

export const useAiCreditBalance = () => {
  const address = useAddress();
  const { contract } = useAirdropContract();
  const { data } = useContractRead(contract, "aiCreditMap", [address]);
  return data;
}