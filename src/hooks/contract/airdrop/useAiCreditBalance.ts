import { useAddress, useContractRead } from "@thirdweb-dev/react";
import { useAirdropContract } from "./useAirdropContract";
import { useActiveAccount } from "thirdweb/react";

export const useAiCreditBalance = () => {
  const address = useActiveAccount();
  const { contract } = useAirdropContract();
  const { data, ...rest } = useContractRead(contract, "aiCreditMap", [address?.address]);
  return { data, ...rest };
}