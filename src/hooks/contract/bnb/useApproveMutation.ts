import { useContractWrite } from "@thirdweb-dev/react";
import { useBnbContract } from "./useBnbContract";

export const useApproveMutation = () => {
  const { contract } = useBnbContract()
  const mutation = useContractWrite(contract, "approve");
  return mutation;
}