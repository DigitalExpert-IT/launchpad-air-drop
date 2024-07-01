import { useAddress } from "@thirdweb-dev/react";
import { useAirdropContract } from "./useAirdropContract";
import { usePair24h } from "@/hooks/useCrypto";
import { useAiCreditBalance } from "./useAiCreditBalance";
import { useUserMap } from "./useUserMap";
import { AI_DECMIAL } from "@/constants/tokenDecimals";
import { fromBn } from "evm-bn";

export interface marketingScheme {
    referrer: number;
    expectProfLos: number;
}


export const useUserAsset = () => {
    const address = useAddress();
    let defaulUSDTtValue = 100;
    let dummyUser = 15;
    


    const { data: aiCreditbalance, isLoading: isLoadingAi } = useAiCreditBalance();
    const {data: userMap, isLoading: isLoadingMap, totalDownline} = useUserMap();
    const { lastPrice, volume } = usePair24h("AI", "USDT", 8000);
    const convertAiBalance = Number(fromBn(aiCreditbalance ?? "0", AI_DECMIAL));
    const currentAssetValue = convertAiBalance * lastPrice;
    
    const countDownReward = (value: number) => {
        let count = 0;
        while (value % 5 === 0 && value !== 0) {
            value = value - 5;
            count++;
        }
        return count;
    }

    const divisionsBy5 = countDownReward(totalDownline)*defaulUSDTtValue;
    defaulUSDTtValue = defaulUSDTtValue+divisionsBy5

    

    //profit/loss = (sellingPrice - buyPrice) x unit
    const buyPrice = convertAiBalance/defaulUSDTtValue
    const profitLoss = (lastPrice - buyPrice) * convertAiBalance
    const profitLossPercentage = (profitLoss/defaulUSDTtValue) * 100


    const countDummyReward = (value: number) => {
        const marketingObjectTest: marketingScheme[] = [] 
        value = Math.floor((dummyUser - totalDownline)/5)

        while(value > 0){
            const usdtVal = (value*defaulUSDTtValue) + defaulUSDTtValue
            const newObject: marketingScheme = {
                referrer: value*5,
                expectProfLos: usdtVal*lastPrice
            }
            marketingObjectTest.push(newObject)

            value -= 1
        }
        return marketingObjectTest;
    }

   
    const dummyReward =  countDummyReward(dummyUser);

    return { profitLoss, currentAssetValue, profitLossPercentage, lastPrice, volume, dummyReward }
}