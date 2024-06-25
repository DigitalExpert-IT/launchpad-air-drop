import { useAddress, useContractRead } from "@thirdweb-dev/react";
import { useAirdropContract } from "./useAirdropContract";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import { ZERO_ADDRESS } from "@/constants/address";
import { useAirdropContractClone } from "./useAirdropContractClone";

export const useAirCreditBalanceClone = () => {
  const address = useActiveAccount()?.address;
  const contract = useAirdropContractClone();
  const { data, ...rest } = useReadContract({
    contract, 
    method: "aiCreditMap",
    params: [address],
    queryOptions: {
      enabled: !!address && address !== ZERO_ADDRESS
    }
  });
  return { data, ...rest };
}