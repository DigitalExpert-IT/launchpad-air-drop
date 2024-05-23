import { AIRDROP_ADDRESS } from "@/constants/address";
import { getActiveChain } from "@/lib/chain";
import { useContract } from "@thirdweb-dev/react";
import Airdrop from "ai-airdrop-contract/artifacts/contracts/Airdrop.sol/Airdrop.json";
import { toHexa } from "@/utils/numberConverter";

const ACTIVE_CHAIN = getActiveChain();

export const useAirdropContract = () => {
  const chainId = toHexa(ACTIVE_CHAIN.chainId) as "0x61";
  const airDropContract = useContract(AIRDROP_ADDRESS[chainId], Airdrop.abi);
  return airDropContract;
}