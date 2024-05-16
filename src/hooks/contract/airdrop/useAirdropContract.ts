import { AIRDROP_ADDRESS } from "@/constants/address";
import { getActiveChain } from "@/lib/chain";
import { useContract } from "@thirdweb-dev/react";
import Airdrop from "ai-airdrop-contract/artifacts/contracts/Airdrop.sol/Airdrop.json";

const ACTIVE_CHAIN = getActiveChain() as "0x61";

export const useAirdropContract = () => {
  const airDropContract = useContract(AIRDROP_ADDRESS[ACTIVE_CHAIN], Airdrop.abi);
  return airDropContract;
}