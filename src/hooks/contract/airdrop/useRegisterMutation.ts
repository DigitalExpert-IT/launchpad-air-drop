import { useAccountSigners, useContractWrite, useSigner } from "@thirdweb-dev/react";
import { useAirdropContract } from "./useAirdropContract"
import { toBn } from "evm-bn";
import { useAsyncCall } from "@/hooks/useAsyncCall";
import { useTranslation } from "react-i18next";
import { prepareContractCall, simulateTransaction, sendTransaction } from "thirdweb";
import { useActiveAccount, useActiveWallet, useSendTransaction,  } from "thirdweb/react";
import { ethers5Adapter } from "thirdweb/adapters/ethers5";
import { useAirdropContractClone } from "./useAirdropContractClone";
import { ThirdwebSDK } from "@thirdweb-dev/react";

// eslint-disable-next-line react-hooks/rules-of-hooks



export const useRegisterMutation = (lastPrice: number) => {
  const contract  = useAirdropContractClone();
  const contracts = useAirdropContract();
  const signer = useSigner();

  console.log("signer", signer)
  
  const {data: accounts, isLoading, error} = useAccountSigners(contracts.contract);
  console.log("accountSigner", accounts, error)
  const { t } = useTranslation();

  // const { mutate: sendTransaction, isPending, isError } = useSendTransaction();
  // const { mutateAsync: mutateAsyncRegister, ...rest } = useContractWrite(contract, "register");

  const registerContract = async (_referral: string, _uri: string,) => {
    if (!signer) {
      throw new Error("Signer is not available");
    }
    const account = await ethers5Adapter.signer.fromEthers(accounts as any);
    console.log("signer", account)
    const transaction = prepareContractCall({
      contract,
      method: {
        "inputs": [
          {
            "internalType": "address",
            "name": "_referral",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "_uri",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "_aiPrice",
            "type": "uint256"
          }
        ],
        "name": "register",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      params: [_referral, _uri, BigInt(5)],
      maxFeePerGas: BigInt(30),
      maxPriorityFeePerGas: BigInt(1),
    })
    try {
      // const { receipt } = await mutateAsyncRegister({
      //   args: [_referral, _uri, toBn(lastPrice.toString(), 18)],
      //   overrides: { value: toBn("5", 18).div(BigInt("1000")) }
      // });

      // sessionStorage.removeItem("email");
      // sessionStorage.removeItem("phone");
      // sessionStorage.removeItem("local");
      // sessionStorage.removeItem("userInfo");

      console.log("tx", transaction)

      const simulationResult = await simulateTransaction({transaction});
      console.log("Simulation result:", simulationResult);

      const {transactionHash}  = await sendTransaction({transaction, account})
      console.log("receipt", transactionHash)
      return transactionHash;
    } catch (error) {
      throw error;
    }
  };

  const { exec: register } = useAsyncCall(registerContract, t("success.register"));

  return { register };
}