import { useBalance } from "@thirdweb-dev/react"
import { useAiContract } from "./useAiContract"

export const useAiBalance = () => {
  const { contract } = useAiContract();
  const balance = useBalance(contract?.getAddress())
  return balance;
}