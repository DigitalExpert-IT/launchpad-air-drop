import { AI_ADDRESS } from "@/constants/address"
import { getActiveChain } from "@/lib/chain";
import { useContract } from "@thirdweb-dev/react"
import AI from "ai-airdrop-contract/artifacts/contracts/AI.sol/AI.json";

const ACTIVE_CHAIN = getActiveChain() as "0x61";

export const useAiContract = () => {
  const aiContract = useContract(AI_ADDRESS[ACTIVE_CHAIN], AI.abi)
  return aiContract;
}