import { useAddress, useContractRead } from "@thirdweb-dev/react";
import { useAirdropContract } from "./useAirdropContract";
import { fromBn } from "evm-bn";

export const useUserMap = () => {
  const address = useAddress();
  const { contract } = useAirdropContract();
  const { data, ...rest } = useContractRead(contract, "userMap", [address]);
  const totalDownline = Number(fromBn(data?.totalDownline || 0))

  return { data, totalDownline, ...rest };
}