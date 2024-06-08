// pages/api/markets.js

import ccxt from 'ccxt';
import { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  info: {
    symbol: string;
    highPrice?: number;
    lowPrice?: number;
    weightedAvgPrice: number;
    priceChangePercent: number;
    volume: number;
    lastPrice: number;
  };
}

type ResponseError = {
  error: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData | ResponseError>
) {
  const { pair } = req.query;

  try {
    const tokocrypto = new ccxt.binance();
    // tokocrypto.proxyUrl = "http://103.178.42.102:8181/";
    const markets = await tokocrypto.fetchTicker(pair);
    res.status(200).json(markets);
  } catch (e) {
    if (e instanceof ccxt.NetworkError) {
      res.status(500).json({ error: `fetchTicker failed due to a network error: ${e.message}` });
    } else if (e instanceof ccxt.ExchangeError) {
      res.status(500).json({ error: `fetchTicker failed due to exchange error: ${e.message}` });
    } else {
      res.status(500).json({ error: `fetchTicker failed with: ${e.message}` });
    }
  }
}
