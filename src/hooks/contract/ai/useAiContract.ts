import { AI_ADDRESS } from "@/constants/address"
import { getActiveChain } from "@/lib/chain";
import { useContract } from "@thirdweb-dev/react"
import { getContract } from "thirdweb";
import AI from "ai-airdrop-contract/artifacts/contracts/AI.sol/AI.json";
import { clientId as client } from "@/constants/clientId";
import { bscTestnet } from "thirdweb/chains";


export const ACTIVE_CHAIN = getActiveChain() as "0x61";

export const useAiContract = () => {
  const clientID= client
  const aiContract = getContract({
    client: clientID,
    chain: bscTestnet,
    abi: AI.abi as any,
    address: AI_ADDRESS[ACTIVE_CHAIN] as any
  })
  return aiContract;
}