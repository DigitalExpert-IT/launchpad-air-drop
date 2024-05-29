import { useAddress, useContractRead } from "@thirdweb-dev/react";
import { useAirdropContract } from "./useAirdropContract";

export const useValidUser = () => {
  const address = useAddress();
  const { contract } = useAirdropContract();
  const { data, ...rest } = useContractRead(contract, "isValidUser", [address]);
  return { data, ...rest };
}