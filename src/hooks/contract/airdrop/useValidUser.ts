import { useAddress, useContractRead } from "@thirdweb-dev/react";
import { useAirdropContract } from "./useAirdropContract";
import { useActiveAccount } from "thirdweb/react";

export const useValidUser = () => {
  const address = useActiveAccount();
  const { contract } = useAirdropContract();
  const { data, ...rest } = useContractRead(contract, "isValidUser", [address?.address]);
  return { data, ...rest };
}