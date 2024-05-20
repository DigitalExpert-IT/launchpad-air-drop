import { useAddress, useContractRead } from "@thirdweb-dev/react";
import { useAirdropContract } from "./useAirdropContract";

export const useUsdtCreditBalance = () => {
  const address = useAddress();
  const { contract } = useAirdropContract();
  const { data } = useContractRead(contract, "usdtCreditMap", [address]);
  return data;
}