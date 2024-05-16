import { useAddress, useContractWrite } from "@thirdweb-dev/react";
import { useApproveMutation, useBnbBalance, useBnbContract } from "../bnb";
import { useAirdropContract } from "./useAirdropContract"
import { toBn } from "evm-bn";
import { BigNumber } from "ethers";

export const useRegisterMutation = () => {
  const address = useAddress();
  const { contract } = useAirdropContract();
  const { contract: bnbContract } = useBnbContract();
  const bnbBalance = useBnbBalance();
  const { mutateAsync: mutateAsyncApprove } = useApproveMutation();
  const { mutateAsync: mutateAsyncRegister, ...rest } = useContractWrite(contract, "register");

  const register = async (_referral: string, _uri: string) => {
    try {
      // check balance and allowance BNB for registration fee 0,005BNB
      if (bnbBalance.data?.value.lt(toBn("500000"))) {
        throw {
          code: "notEnoughBnbBalance"
        };
      }

      const allowance: BigNumber = await bnbContract?.call("allowance", [address, contract?.getAddress()]);
      if (allowance.lt(toBn("500000"))) {
        await mutateAsyncApprove({
          args: [bnbContract?.getAddress(), toBn("1", 8)],
        });
      }

      const { receipt } = await mutateAsyncRegister({
        args: [_referral, _uri]
      })

      return receipt;
    } catch (error) {
      throw error;
    }
  }

  return { register, ...rest };
}