import { useAddress, useContractWrite } from "@thirdweb-dev/react";
import { useApproveMutation, useBnbBalance, useBnbContract } from "../bnb";
import { useAirdropContract } from "./useAirdropContract"
import { toBn } from "evm-bn";
import { BigNumber } from "ethers";
import { BNB_DECIMAL } from "@/constants/tokenDecimals";

export const useRegisterMutation = () => {
  const address = useAddress();
  const { contract } = useAirdropContract();
  const { contract: bnbContract } = useBnbContract();
  const bnbBalance = useBnbBalance();
  const { mutateAsync: mutateAsyncApprove } = useApproveMutation();
  const { mutateAsync: mutateAsyncRegister, ...rest } = useContractWrite(contract, "register");

  const register = async (_referral: string, _uri: string, ) => {
    console.log("referral", _referral);
    console.log("uri", _uri);
    
    console.log("receipt", toBn("5", 18).div(BigInt("1000")));
    try {
        const { receipt } = await mutateAsyncRegister({
          args: [_referral, _uri],
          overrides: {value: toBn("5", 18).div(BigInt("1000"))}
        })

        console.log("receipt", receipt);

      return receipt;
    } catch (error) {
      throw error;
    }
  }

  return { register, ...rest };
}