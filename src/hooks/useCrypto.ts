import { useState, useEffect, useCallback } from "react";
import { getSymbols, findByValue } from "@/utils/formatter";
import {
  CryptoCurrencies,
  ICryptoCurrencies,
} from "@/constants/cryptoCurrencies";

interface BinanceTickerData {
  symbol: string;
  lastPrice?: number;
  highPrice?: number;
  lowPrice?: number;
  weightedAvgPrice: number;
  priceChangePercent: number;
}

const useCrypto = () => {
  const [cryptocurrencies, setCryptocurrencies] =
    useState<ICryptoCurrencies[]>(CryptoCurrencies);

  const fetchCrypto = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.binance.com/api/v3/ticker/24hr?symbols=${JSON.stringify(
          getSymbols()
        )}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: BinanceTickerData[] = await response.json();

      setCryptocurrencies(
        cryptocurrencies.map((item) => {
          const foundItem = findByValue(data as [], item.symbol) as unknown as {
            lastPrice?: number;
            highPrice?: number;
            lowPrice?: number;
            weightedAvgPrice: number;
            priceChangePercent: number;
          };

          return {
            ...item,
            highPrice: foundItem?.highPrice || 0,
            lowPrice: foundItem?.lowPrice || 0,
            price: foundItem?.lastPrice || 0,
            prevPrice: item.price || 0,
            weightedAvgPrice: foundItem.weightedAvgPrice || 0,
            priceChangePercent: foundItem.priceChangePercent || 0,
          };
        })
      );
    } catch (error) {
      console.error("Error fetching crypto data:", error);
    }
  }, [cryptocurrencies]);

  useEffect(() => {
    const interval = setInterval(fetchCrypto, 60000);
    return () => clearInterval(interval);
  }, [fetchCrypto]);

  return cryptocurrencies;
};

const usePair24h = (pair: string) => {
  const [pairData, setPairData] = useState({
    priceChangePercent: 0,
  });

  const fetchData = useCallback(async (pair: string) => {
    try {
      const response = await fetch(
        `https://api.binance.com/api/v3/ticker/24hr?symbol=${pair}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: BinanceTickerData = await response.json();

      setPairData({ ...data, priceChangePercent: data.priceChangePercent });
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchData(pair);
  }, [pair, fetchData]);

  return pairData;
};

export { useCrypto, usePair24h };
