import { AIRDROP_ADDRESS } from "@/constants/address";
import { getActiveChain } from "@/lib/chain";
import { getContract } from "thirdweb";
import { useContract } from "@thirdweb-dev/react";
import Airdrop from "ai-airdrop-contract/artifacts/contracts/Airdrop.sol/Airdrop.json";
import { toHexa } from "@/utils/numberConverter";
import { clientId as client } from "@/constants/clientId";
import { bscTestnet } from "thirdweb/chains";

const CURRENT_CHAIN_ID = (process.env.NEXT_PUBLIC_CHAIN_ID ||
  "0x61") as "0x61";

const contractAddress = AIRDROP_ADDRESS[CURRENT_CHAIN_ID]

export const useAirdropContractClone = () => {
  const clientID= client
  const airDropContract = getContract({
    client: clientID,
    chain: bscTestnet,
    abi: Airdrop.abi as any,
    address: contractAddress
  })
  return airDropContract;
}