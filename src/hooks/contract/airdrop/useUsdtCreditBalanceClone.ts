import { useAddress, useContractRead } from "@thirdweb-dev/react";
import { useAirdropContract } from "./useAirdropContract";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import { useAirdropContractClone } from "./useAirdropContractClone";

export const useUsdtCreditBalanceClone = () => {
  const address = useActiveAccount();
  const contract = useAirdropContractClone();
  const { data, ...rest } = useReadContract({
    contract, 
    method: "usdtCreditMap", 
    params: address?.address as any
  });
  return { data, ...rest };
}